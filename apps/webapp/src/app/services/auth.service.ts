import { inject, Injectable } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  user,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly auth = inject(Auth);
  private readonly router = inject(Router);

  authStateReady$ = new Observable<boolean>((observer) => {
    const unsubscribe = this.auth.onAuthStateChanged((user) => {
      observer.next(user !== null);
      observer.complete();
    });
    return () => {
      unsubscribe();
    };
  });

  readonly user$ = user(this.auth).pipe(map((user) => (user ? user : null)));

  appInitializer(): Promise<void> {
    console.log('Auth Initializer: Checking auth state...');
    return new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(
        this.auth,
        (user: User | null) => {
          if (user) {
            console.log('Auth Initializer: User is logged in', user.uid);
          } else {
            console.log('Auth Initializer: User is not logged in');
          }
          unsubscribe(); // Unsubscribe after the first emission
          resolve();
        },
        (error) => {
          console.error('Auth Initializer: Error checking auth state', error);
          unsubscribe(); // Unsubscribe on error
          reject(error);
        },
      );
    });
  }

  readonly isLoggedIn$ = this.user$.pipe(map(Boolean));

  loginWithGoogle(): Observable<void> {
    return from(signInWithPopup(this.auth, new GoogleAuthProvider())).pipe(
      map(() => undefined),
    );
  }

  logout(): Observable<void> {
    return from(signOut(this.auth)).pipe(
      switchMap(() => this.router.navigate(['/login'])),
      map(() => undefined),
    );
  }
}

export function authInitializerFactory(
  authInitializerService: AuthService,
): () => Promise<void> {
  return () => authInitializerService.appInitializer();
}
