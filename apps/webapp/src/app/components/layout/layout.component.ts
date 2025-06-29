import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule],
  template: `
    <header class="bg-gray-800 text-white shadow-md">
      <nav
        class="container mx-auto px-6 py-4 flex justify-between items-center"
      >
        <a href="/" class="text-2xl font-bold">BookRec</a>
        <ul class="flex space-x-4">
          @if (isLoggedIn()) {
          <li><a routerLink="/" class="hover:text-gray-300">Home</a></li>
          <li>
            <a routerLink="/books" class="hover:text-gray-300">All Books</a>
          </li>
          <li>
            <a routerLink="/search" class="hover:text-gray-300">Search</a>
          </li>
          }
        </ul>
        <div>
          @if (isLoggedIn()) {
          <div class="flex items-center space-x-4">
            @if (user(); as user) {
            <span class="text-white">Welcome, {{ user.displayName }}</span>
            }
            <button (click)="logout()" class="hover:text-gray-300">
              Logout
            </button>
          </div>
          } @else {
          <a routerLink="/login" class="hover:text-gray-300">Login</a>
          }
        </div>
      </nav>
    </header>
    <main class="container mx-auto p-6">
      <router-outlet></router-outlet>
    </main>
  `,
})
export class LayoutComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  user = toSignal(this.authService.user$);
  isLoggedIn = computed(() => !!this.user());

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
