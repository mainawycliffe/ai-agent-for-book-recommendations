import { Component, inject } from '@angular/core';
import { Book } from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { ReadHistoryService } from '../../services/read-history.service';
import { BookCardComponent } from '../book-card/book-card.component';

@Component({
  selector: 'app-books',
  template: `
    <h1 class="text-3xl font-bold mb-6">All Books</h1>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      @for (book of books(); track book.id) {
      <app-book-card [book]="book" (add_to_history)="addToHistory(book)" />
      }
    </div>
  `,
  standalone: true,
  imports: [BookCardComponent],
})
export class BooksComponent {
  private readonly bookService = inject(BookService);
  private readonly readHistoryService = inject(ReadHistoryService);

  readonly books = this.bookService.getBooks();

  addToHistory(book: Book) {
    this.readHistoryService.addToHistory(book);
  }
}
