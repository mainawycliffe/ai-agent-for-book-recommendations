import { computed, inject, Injectable, Signal } from '@angular/core';
import { Book } from '../models/book.model';
import { BookService } from './book.service';
import { ReadHistoryService } from './read-history.service';

@Injectable({ providedIn: 'root' })
export class RecommendationService {
  private readonly bookService = inject(BookService);
  private readonly readHistoryService = inject(ReadHistoryService);

  private readonly books = this.bookService.getBooks();
  private readonly readHistory = this.readHistoryService.getHistory();

  getRecommendations(): Signal<Book[]> {
    return computed(() => {
      const readIds = new Set(this.readHistory().map((b) => b.id));
      return this.books().filter((b) => !readIds.has(b.id));
    });
  }
}
