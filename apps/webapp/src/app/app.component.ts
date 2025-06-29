import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <header class="bg-gray-800 text-white shadow-md">
      <nav
        class="container mx-auto px-6 py-4 flex justify-between items-center"
      >
        <a href="/" class="text-2xl font-bold">BookRec</a>
        <ul class="flex space-x-4">
          <li><a routerLink="/" class="hover:text-gray-300">Home</a></li>
          <li>
            <a routerLink="/books" class="hover:text-gray-300">All Books</a>
          </li>
          <li>
            <a routerLink="/search" class="hover:text-gray-300">Search</a>
          </li>
        </ul>
      </nav>
    </header>
    <main class="container mx-auto px-6 py-8">
      <router-outlet></router-outlet>
    </main>
  `,
  standalone: true,
  imports: [RouterModule],
})
export class AppComponent {}
