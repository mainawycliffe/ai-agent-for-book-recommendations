import { Component, input, output } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-card',
  template: `
    <div class="bg-white rounded-lg shadow-md overflow-hidden w-full">
      <img
        [src]="book().thumbnail"
        [alt]="book().title"
        class="w-full aspect-[9/16] object-cover"
      />
      <div class="p-4">
        <h3 class="font-bold text-lg">{{ book().title }}</h3>
        <p class="text-gray-600 mb-2">{{ book().author }}</p>

        <p class="text-gray-700 text-sm mb-4 line-clamp-2 flex-grow">
          {{ book().description }}
        </p>

        <div class="flex justify-between items-center mt-auto">
          <div class="relative">
            <button
              [attr.popovertarget]="'popover-' + book().id"
              class="text-sm text-blue-500 hover:underline"
            >
              Show More
            </button>

            <div
              [id]="'popover-' + book().id"
              popover
              class="w-64 max-w-xs bg-white border border-gray-200 rounded-lg shadow-xl p-4 z-10"
            >
              <h4 class="font-bold mb-2">Description</h4>
              <p class="text-gray-700 text-sm">
                {{ book().description }}
              </p>
            </div>
          </div>

          <button
            (click)="add_to_history.emit(book())"
            class="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-300"
          >
            Add to History
          </button>
        </div>
      </div>
    </div>
  `,
  standalone: true,
})
export class BookCardComponent {
  book = input.required<Book>();
  add_to_history = output<Book>();
}
