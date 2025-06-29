import { inject, Injectable } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
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
  private readonly auth: Auth = inject(Auth);
  private readonly router = inject(Router);
  readonly user$ = user(this.auth).pipe(
    map((user) =>
      user
        ? ({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          } as User)
        : null
    )
  );
  readonly isLoggedIn$ = this.user$.pipe(map(Boolean));

  loginWithGoogle(): Observable<void> {
    return from(signInWithPopup(this.auth, new GoogleAuthProvider())).pipe(
      map(() => undefined)
    );
  }

  logout(): Observable<void> {
    return from(signOut(this.auth)).pipe(
      switchMap(() => this.router.navigate(['/login'])),
      map(() => undefined)
    );
  }
}
