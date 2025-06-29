import { Injectable, signal } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({ providedIn: 'root' })
export class BookService {
  private readonly books = signal<Book[]>([
    {
      id: '1',
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      description:
        'A young hobbit, Frodo Baggins, embarks on a perilous journey to destroy the One Ring and save Middle-earth from the Dark Lord Sauron.',
      thumbnail: 'https://covers.openlibrary.org/b/id/12810699-L.jpg',
    },
    {
      id: '2',
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      description:
        'The adventure of Bilbo Baggins, a hobbit who is swept into an epic quest to reclaim the lost Dwarf Kingdom of Erebor from the fearsome dragon Smaug.',
      thumbnail: 'https://covers.openlibrary.org/b/id/10116909-L.jpg',
    },
    {
      id: '3',
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      description:
        'The story of Elizabeth Bennet, who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness.',
      thumbnail: 'https://covers.openlibrary.org/b/id/10580132-L.jpg',
    },
  ]);

  getBooks() {
    return this.books.asReadonly();
  }

  searchBooks(searchTerm: string): Book[] {
    if (!searchTerm) {
      return this.books();
    }

    return this.books().filter(
      (book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
