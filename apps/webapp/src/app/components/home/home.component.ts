import { Component } from '@angular/core';
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
        <app-read-history />
      </div>
    </div>
  `,
  standalone: true,
  imports: [RecommendedBooksComponent, ReadHistoryComponent],
})
export class HomeComponent {}
