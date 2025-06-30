import { upsertBook } from '@firebasegen/default-connector';
import { initializeApp } from 'firebase/app';
import { promises as fs } from 'fs';
import { DateTime } from 'luxon';
import * as path from 'path';

initializeApp({
  apiKey: 'AIzaSyB5XYrSMA-3XQYXDrOUqOencsBXd0_-OQQ',
  authDomain: 'ai-agent-for-libarry.firebaseapp.com',
  projectId: 'ai-agent-for-libarry',
  messagingSenderId: '689128396805',
  appId: '1:689128396805:web:8b3ece84467982db31646c',
});

interface Book {
  Name: string;
  Author: string;
  Year: number;
  Genre: string;
}

const booksData = await fs.readFile(
  path.join(__dirname, './books.json'),
  'utf-8'
);
const books: Book[] = JSON.parse(booksData);

const uniqueBooks = Array.from(
  new Map(books.map((book) => [book.Name, book])).values()
);

console.log(`Found ${uniqueBooks.length} books to upsert.`);

for (const book of uniqueBooks) {
  const title = book.Name;
  const summary = `A book about ${book.Name} by ${book.Author}. It was published in ${book.Year}. The genre is ${book.Genre}.`;
  const genre = [book.Genre];
  const authors = [book.Author];
  const content = book.Name;
  const imageUrl = 'https://via.placeholder.com/150';

  console.log('Upserting book:', title);

  await upsertBook({
    title,
    summary,
    genre,
    authors,
    publishedDate: DateTime.fromObject({
      year: book.Year,
    }).toISO()!,
    content,
    imageUrl,
  });

  console.log(`Upserted book: ${title}`);

  // Adding a delay to avoid hitting rate limits
  await new Promise((resolve) => setTimeout(resolve, 2500));
}

console.log('All books have been upserted.');
