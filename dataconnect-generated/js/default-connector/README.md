# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*Books*](#books)
  - [*ReadHistory*](#readhistory)
- [**Mutations**](#mutations)
  - [*upsertUser*](#upsertuser)
  - [*upsertBook*](#upsertbook)

# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `default`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

You can use this generated SDK by importing from the package `@firebasegen/default-connector` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `default`.

You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@firebasegen/default-connector';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@firebasegen/default-connector';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `default` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## Books
You can execute the `Books` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [default-connector/index.d.ts](./index.d.ts):
```typescript
books(): QueryPromise<BooksData, undefined>;

interface BooksRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<BooksData, undefined>;
}
export const booksRef: BooksRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
books(dc: DataConnect): QueryPromise<BooksData, undefined>;

interface BooksRef {
  ...
  (dc: DataConnect): QueryRef<BooksData, undefined>;
}
export const booksRef: BooksRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the booksRef:
```typescript
const name = booksRef.operationName;
console.log(name);
```

### Variables
The `Books` query has no variables.
### Return Type
Recall that executing the `Books` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `BooksData`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `Books`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, books } from '@firebasegen/default-connector';


// Call the `books()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await books();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await books(dataConnect);

console.log(data.books);

// Or, you can use the `Promise` API.
books().then((response) => {
  const data = response.data;
  console.log(data.books);
});
```

### Using `Books`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, booksRef } from '@firebasegen/default-connector';


// Call the `booksRef()` function to get a reference to the query.
const ref = booksRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = booksRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.books);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.books);
});
```

## ReadHistory
You can execute the `ReadHistory` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [default-connector/index.d.ts](./index.d.ts):
```typescript
readHistory(vars: ReadHistoryVariables): QueryPromise<ReadHistoryData, ReadHistoryVariables>;

interface ReadHistoryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: ReadHistoryVariables): QueryRef<ReadHistoryData, ReadHistoryVariables>;
}
export const readHistoryRef: ReadHistoryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
readHistory(dc: DataConnect, vars: ReadHistoryVariables): QueryPromise<ReadHistoryData, ReadHistoryVariables>;

interface ReadHistoryRef {
  ...
  (dc: DataConnect, vars: ReadHistoryVariables): QueryRef<ReadHistoryData, ReadHistoryVariables>;
}
export const readHistoryRef: ReadHistoryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the readHistoryRef:
```typescript
const name = readHistoryRef.operationName;
console.log(name);
```

### Variables
The `ReadHistory` query requires an argument of type `ReadHistoryVariables`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface ReadHistoryVariables {
  uid: string;
}
```
### Return Type
Recall that executing the `ReadHistory` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ReadHistoryData`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
  } & ReadHistory_Key)[];
}
```
### Using `ReadHistory`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, readHistory, ReadHistoryVariables } from '@firebasegen/default-connector';

// The `ReadHistory` query requires an argument of type `ReadHistoryVariables`:
const readHistoryVars: ReadHistoryVariables = {
  uid: ..., 
};

// Call the `readHistory()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await readHistory(readHistoryVars);
// Variables can be defined inline as well.
const { data } = await readHistory({ uid: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await readHistory(dataConnect, readHistoryVars);

console.log(data.readHistories);

// Or, you can use the `Promise` API.
readHistory(readHistoryVars).then((response) => {
  const data = response.data;
  console.log(data.readHistories);
});
```

### Using `ReadHistory`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, readHistoryRef, ReadHistoryVariables } from '@firebasegen/default-connector';

// The `ReadHistory` query requires an argument of type `ReadHistoryVariables`:
const readHistoryVars: ReadHistoryVariables = {
  uid: ..., 
};

// Call the `readHistoryRef()` function to get a reference to the query.
const ref = readHistoryRef(readHistoryVars);
// Variables can be defined inline as well.
const ref = readHistoryRef({ uid: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = readHistoryRef(dataConnect, readHistoryVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.readHistories);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.readHistories);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `default` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## upsertUser
You can execute the `upsertUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [default-connector/index.d.ts](./index.d.ts):
```typescript
upsertUser(vars: UpsertUserVariables): MutationPromise<UpsertUserData, UpsertUserVariables>;

interface UpsertUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpsertUserVariables): MutationRef<UpsertUserData, UpsertUserVariables>;
}
export const upsertUserRef: UpsertUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
upsertUser(dc: DataConnect, vars: UpsertUserVariables): MutationPromise<UpsertUserData, UpsertUserVariables>;

interface UpsertUserRef {
  ...
  (dc: DataConnect, vars: UpsertUserVariables): MutationRef<UpsertUserData, UpsertUserVariables>;
}
export const upsertUserRef: UpsertUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the upsertUserRef:
```typescript
const name = upsertUserRef.operationName;
console.log(name);
```

### Variables
The `upsertUser` mutation requires an argument of type `UpsertUserVariables`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpsertUserVariables {
  uid: string;
  name?: string | null;
  email?: string | null;
}
```
### Return Type
Recall that executing the `upsertUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpsertUserData`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpsertUserData {
  user_upsert: User_Key;
}
```
### Using `upsertUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, upsertUser, UpsertUserVariables } from '@firebasegen/default-connector';

// The `upsertUser` mutation requires an argument of type `UpsertUserVariables`:
const upsertUserVars: UpsertUserVariables = {
  uid: ..., 
  name: ..., // optional
  email: ..., // optional
};

// Call the `upsertUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await upsertUser(upsertUserVars);
// Variables can be defined inline as well.
const { data } = await upsertUser({ uid: ..., name: ..., email: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await upsertUser(dataConnect, upsertUserVars);

console.log(data.user_upsert);

// Or, you can use the `Promise` API.
upsertUser(upsertUserVars).then((response) => {
  const data = response.data;
  console.log(data.user_upsert);
});
```

### Using `upsertUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, upsertUserRef, UpsertUserVariables } from '@firebasegen/default-connector';

// The `upsertUser` mutation requires an argument of type `UpsertUserVariables`:
const upsertUserVars: UpsertUserVariables = {
  uid: ..., 
  name: ..., // optional
  email: ..., // optional
};

// Call the `upsertUserRef()` function to get a reference to the mutation.
const ref = upsertUserRef(upsertUserVars);
// Variables can be defined inline as well.
const ref = upsertUserRef({ uid: ..., name: ..., email: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = upsertUserRef(dataConnect, upsertUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_upsert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_upsert);
});
```

## upsertBook
You can execute the `upsertBook` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [default-connector/index.d.ts](./index.d.ts):
```typescript
upsertBook(vars: UpsertBookVariables): MutationPromise<UpsertBookData, UpsertBookVariables>;

interface UpsertBookRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpsertBookVariables): MutationRef<UpsertBookData, UpsertBookVariables>;
}
export const upsertBookRef: UpsertBookRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
upsertBook(dc: DataConnect, vars: UpsertBookVariables): MutationPromise<UpsertBookData, UpsertBookVariables>;

interface UpsertBookRef {
  ...
  (dc: DataConnect, vars: UpsertBookVariables): MutationRef<UpsertBookData, UpsertBookVariables>;
}
export const upsertBookRef: UpsertBookRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the upsertBookRef:
```typescript
const name = upsertBookRef.operationName;
console.log(name);
```

### Variables
The `upsertBook` mutation requires an argument of type `UpsertBookVariables`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpsertBookVariables {
  id: UUIDString;
  title: string;
  summary: string;
  genre: string[];
  authors: string[];
  publishedDate: TimestampString;
  content: string;
  imageUrl: string;
}
```
### Return Type
Recall that executing the `upsertBook` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpsertBookData`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpsertBookData {
  book_upsert: Book_Key;
}
```
### Using `upsertBook`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, upsertBook, UpsertBookVariables } from '@firebasegen/default-connector';

// The `upsertBook` mutation requires an argument of type `UpsertBookVariables`:
const upsertBookVars: UpsertBookVariables = {
  id: ..., 
  title: ..., 
  summary: ..., 
  genre: ..., 
  authors: ..., 
  publishedDate: ..., 
  content: ..., 
  imageUrl: ..., 
};

// Call the `upsertBook()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await upsertBook(upsertBookVars);
// Variables can be defined inline as well.
const { data } = await upsertBook({ id: ..., title: ..., summary: ..., genre: ..., authors: ..., publishedDate: ..., content: ..., imageUrl: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await upsertBook(dataConnect, upsertBookVars);

console.log(data.book_upsert);

// Or, you can use the `Promise` API.
upsertBook(upsertBookVars).then((response) => {
  const data = response.data;
  console.log(data.book_upsert);
});
```

### Using `upsertBook`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, upsertBookRef, UpsertBookVariables } from '@firebasegen/default-connector';

// The `upsertBook` mutation requires an argument of type `UpsertBookVariables`:
const upsertBookVars: UpsertBookVariables = {
  id: ..., 
  title: ..., 
  summary: ..., 
  genre: ..., 
  authors: ..., 
  publishedDate: ..., 
  content: ..., 
  imageUrl: ..., 
};

// Call the `upsertBookRef()` function to get a reference to the mutation.
const ref = upsertBookRef(upsertBookVars);
// Variables can be defined inline as well.
const ref = upsertBookRef({ id: ..., title: ..., summary: ..., genre: ..., authors: ..., publishedDate: ..., content: ..., imageUrl: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = upsertBookRef(dataConnect, upsertBookVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.book_upsert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.book_upsert);
});
```

