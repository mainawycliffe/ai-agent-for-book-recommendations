import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { AuthService } from '../../services/auth.service';
import { ReadHistoryComponent } from '../read-history/read-history.component';
import { RecommendedBooksComponent } from '../recommended-books/recommended-books.component';

@Component({
  selector: 'app-home',
  template: `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="md:col-span-2">
        <app-recommended-books />
      </div>
      <div>
        @let userData = user();

        @if (userData) {
          <app-read-history [user]="userData" />
        }
      </div>
    </div>
  `,
  standalone: true,
  imports: [RecommendedBooksComponent, ReadHistoryComponent],
})
export class HomeComponent {
  authService = inject(AuthService);

  user = toSignal(this.authService.user$);
}
