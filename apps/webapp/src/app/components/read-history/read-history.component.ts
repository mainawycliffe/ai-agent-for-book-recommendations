import { Component, inject, input } from '@angular/core';
import { injectReadHistory } from '@firebasegen/default-connector/angular';
import { User } from 'firebase/auth';
import { AuthService } from '../../services/auth.service';
import { BookCardComponent } from '../book-card/book-card.component';

@Component({
  selector: 'app-read-history',
  template: `
    @let history = historyQuery.data()?.readHistories;

    <h1 class="text-2xl font-bold mb-6">Read History</h1>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
    >
      @for (h of history; track h.id) {
        <app-book-card [book]="h.book" />
      }
    </div>
  `,
  standalone: true,
  imports: [BookCardComponent],
})
export class ReadHistoryComponent {
  authService = inject(AuthService);

  user = input.required<User>();

  historyQuery = injectReadHistory({
    uid: this.user().uid,
  });
}
