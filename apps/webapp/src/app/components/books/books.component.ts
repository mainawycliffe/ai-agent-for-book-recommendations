import { Component, inject } from '@angular/core';
import { injectBooks } from '@firebasegen/default-connector/angular';
import { Book } from '../../models/book.model';
import { ReadHistoryService } from '../../services/read-history.service';
import { BookCardComponent } from '../book-card/book-card.component';

@Component({
  selector: 'app-books',
  template: `
    @let books = booksQuery.data()?.books;
    @let isLoading = booksQuery.isLoading();

    <h1 class="text-3xl font-bold mb-6">All Books</h1>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      @if (isLoading) {
        <p class="text-gray-500">Loading books...</p>
      } @else {
        @for (book of books; track book.id) {
          <app-book-card [book]="book" />
        } @empty {
          <p class="text-gray-500">No books available.</p>
        }
      }
    </div>
  `,
  standalone: true,
  imports: [BookCardComponent],
})
export class BooksComponent {
  private readonly readHistoryService = inject(ReadHistoryService);

  readonly booksQuery = injectBooks(() => ({}));

  addToHistory(book: Book) {
    this.readHistoryService.addToHistory(book);
  }
}
