import { Component, inject } from '@angular/core';
import { ReadHistoryService } from '../../services/read-history.service';
import { BookCardComponent } from '../book-card/book-card.component';

@Component({
  selector: 'app-read-history',
  template: `
    <h1 class="text-2xl font-bold mb-6">Read History</h1>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
    >
      @for (book of history(); track book.id) {
      <app-book-card [book]="book" />
      }
    </div>
  `,
  standalone: true,
  imports: [BookCardComponent],
})
export class ReadHistoryComponent {
  private readonly readHistoryService = inject(ReadHistoryService);
  readonly history = this.readHistoryService.getHistory();
}
