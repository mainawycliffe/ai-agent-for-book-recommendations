import { Component, inject } from '@angular/core';
import { RecommendationService } from '../../services/recommendation.service';
import { BookCardComponent } from '../book-card/book-card.component';

@Component({
  selector: 'app-recommended-books',
  template: `
    <h2 class="text-2xl font-bold mb-4">Recommended For You</h2>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      @for (book of recommendations(); track book.id) {
        <!-- <app-book-card [book]="book" /> -->
      }
    </div>
  `,
  standalone: true,
  imports: [BookCardComponent],
})
export class RecommendedBooksComponent {
  private readonly recommendationService = inject(RecommendationService);
  readonly recommendations = this.recommendationService.getRecommendations();
}
