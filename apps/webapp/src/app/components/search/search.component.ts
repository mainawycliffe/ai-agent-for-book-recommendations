import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { BookCardComponent } from '../book-card/book-card.component';

@Component({
  selector: 'app-search',
  template: `
    <h1 class="text-3xl font-bold mb-6">Search Books</h1>
    <div class="mb-4">
      <input
        type="text"
        [(ngModel)]="searchTerm"
        (ngModelChange)="search()"
        placeholder="Search for books..."
        class="w-full px-4 py-2 border rounded-md"
      />
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      @for (book of searchResults(); track book.id) {
      <app-book-card [book]="book" />
      }
    </div>
  `,
  standalone: true,
  imports: [BookCardComponent, FormsModule],
})
export class SearchComponent {
  private readonly bookService = inject(BookService);

  searchTerm = '';
  searchResults = signal<Book[]>([]);

  search() {
    this.searchResults.set(this.bookService.searchBooks(this.searchTerm));
  }
}
