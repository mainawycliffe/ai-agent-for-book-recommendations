import { Injectable, signal } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({ providedIn: 'root' })
export class ReadHistoryService {
  private readonly history = signal<Book[]>([]);

  getHistory() {
    return this.history.asReadonly();
  }

  addToHistory(book: Book) {
    this.history.update((history) => [...history, book]);
  }
}
