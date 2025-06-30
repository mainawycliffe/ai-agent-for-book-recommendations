import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;


export interface Book_Key {
  id: UUIDString;
  __typename?: 'Book_Key';
}

export interface BooksData {
  books: ({
    id: UUIDString;
    title: string;
    authors: string[];
    genre: string[];
    summary: string;
    imageUrl: string;
    publishedDate: TimestampString;
    content: string;
  } & Book_Key)[];
}

export interface DeleteReadHistoryData {
  readHistory_delete?: ReadHistory_Key | null;
}

export interface DeleteReadHistoryVariables {
  id: UUIDString;
  userUid: string;
}

export interface ReadHistoryData {
  readHistories: ({
    id: UUIDString;
    book: {
      id: UUIDString;
      title: string;
      authors: string[];
      genre: string[];
      summary: string;
      imageUrl: string;
      publishedDate: TimestampString;
      content: string;
    } & Book_Key;
      readDate: TimestampString;
      rating?: number | null;
      review?: string | null;
      user: {
        uid: string;
        name?: string | null;
        email: string;
      } & User_Key;
  })[];
}

export interface ReadHistoryVariables {
  uid: string;
}

export interface ReadHistory_Key {
  id: UUIDString;
  userUid: string;
  __typename?: 'ReadHistory_Key';
}

export interface UpsertBookData {
  book_upsert: Book_Key;
}

export interface UpsertBookVariables {
  id?: UUIDString | null;
  title: string;
  summary: string;
  genre: string[];
  authors: string[];
  publishedDate: TimestampString;
  content: string;
  imageUrl: string;
}

export interface UpsertReadHistoryData {
  readHistory_upsert: ReadHistory_Key;
}

export interface UpsertReadHistoryVariables {
  id?: UUIDString | null;
  userUid: string;
  bookId: UUIDString;
  readDate: TimestampString;
  rating?: number | null;
  review?: string | null;
}

export interface UpsertUserData {
  user_upsert: User_Key;
}

export interface UpsertUserVariables {
  uid: string;
  name?: string | null;
  email?: string | null;
}

export interface User_Key {
  uid: string;
  __typename?: 'User_Key';
}

interface UpsertUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpsertUserVariables): MutationRef<UpsertUserData, UpsertUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpsertUserVariables): MutationRef<UpsertUserData, UpsertUserVariables>;
  operationName: string;
}
export const upsertUserRef: UpsertUserRef;

export function upsertUser(vars: UpsertUserVariables): MutationPromise<UpsertUserData, UpsertUserVariables>;
export function upsertUser(dc: DataConnect, vars: UpsertUserVariables): MutationPromise<UpsertUserData, UpsertUserVariables>;

interface UpsertBookRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpsertBookVariables): MutationRef<UpsertBookData, UpsertBookVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpsertBookVariables): MutationRef<UpsertBookData, UpsertBookVariables>;
  operationName: string;
}
export const upsertBookRef: UpsertBookRef;

export function upsertBook(vars: UpsertBookVariables): MutationPromise<UpsertBookData, UpsertBookVariables>;
export function upsertBook(dc: DataConnect, vars: UpsertBookVariables): MutationPromise<UpsertBookData, UpsertBookVariables>;

interface UpsertReadHistoryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpsertReadHistoryVariables): MutationRef<UpsertReadHistoryData, UpsertReadHistoryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpsertReadHistoryVariables): MutationRef<UpsertReadHistoryData, UpsertReadHistoryVariables>;
  operationName: string;
}
export const upsertReadHistoryRef: UpsertReadHistoryRef;

export function upsertReadHistory(vars: UpsertReadHistoryVariables): MutationPromise<UpsertReadHistoryData, UpsertReadHistoryVariables>;
export function upsertReadHistory(dc: DataConnect, vars: UpsertReadHistoryVariables): MutationPromise<UpsertReadHistoryData, UpsertReadHistoryVariables>;

interface DeleteReadHistoryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteReadHistoryVariables): MutationRef<DeleteReadHistoryData, DeleteReadHistoryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteReadHistoryVariables): MutationRef<DeleteReadHistoryData, DeleteReadHistoryVariables>;
  operationName: string;
}
export const deleteReadHistoryRef: DeleteReadHistoryRef;

export function deleteReadHistory(vars: DeleteReadHistoryVariables): MutationPromise<DeleteReadHistoryData, DeleteReadHistoryVariables>;
export function deleteReadHistory(dc: DataConnect, vars: DeleteReadHistoryVariables): MutationPromise<DeleteReadHistoryData, DeleteReadHistoryVariables>;

interface BooksRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<BooksData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<BooksData, undefined>;
  operationName: string;
}
export const booksRef: BooksRef;

export function books(): QueryPromise<BooksData, undefined>;
export function books(dc: DataConnect): QueryPromise<BooksData, undefined>;

interface ReadHistoryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ReadHistoryVariables): QueryRef<ReadHistoryData, ReadHistoryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ReadHistoryVariables): QueryRef<ReadHistoryData, ReadHistoryVariables>;
  operationName: string;
}
export const readHistoryRef: ReadHistoryRef;

export function readHistory(vars: ReadHistoryVariables): QueryPromise<ReadHistoryData, ReadHistoryVariables>;
export function readHistory(dc: DataConnect, vars: ReadHistoryVariables): QueryPromise<ReadHistoryData, ReadHistoryVariables>;

