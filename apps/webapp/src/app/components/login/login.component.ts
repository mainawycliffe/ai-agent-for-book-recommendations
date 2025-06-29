import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { GoogleLogoComponent } from './google-logo.component';

@Component({
  selector: 'app-login',
  template: `
    <div class="flex items-center justify-center w-screen h-screen">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-800 mb-2">
          Welcome to BookRec
        </h1>
        <p class="text-lg text-gray-600 mb-8">
          Your personal book recommendation engine
        </p>
        <button
          (click)="login()"
          class="inline-flex items-center px-6 py-3 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <app-google-logo></app-google-logo>
          <span>Login with Google</span>
        </button>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [GoogleLogoComponent],
})
export class LoginComponent {
  private readonly authService = inject(AuthService);

  login() {
    this.authService.loginWithGoogle().subscribe();
  }
}
