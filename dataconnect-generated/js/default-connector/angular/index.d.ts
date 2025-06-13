import { UpsertUserData, UpsertUserVariables, UpsertBookData, UpsertBookVariables, BooksData, ReadHistoryData, ReadHistoryVariables } from '../';
import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise} from '@angular/fire/data-connect';
import { CreateQueryResult, CreateMutationResult} from '@tanstack/angular-query-experimental';
import { CreateDataConnectQueryResult, CreateDataConnectQueryOptions, CreateDataConnectMutationResult, DataConnectMutationOptionsUndefinedMutationFn } from '@tanstack-query-firebase/angular/data-connect';
import { FirebaseError } from 'firebase/app';
import { Injector } from '@angular/core';

type UpsertUserOptions = DataConnectMutationOptionsUndefinedMutationFn<UpsertUserData, FirebaseError, UpsertUserVariables>;
export function injectUpsertUser(options?: UpsertUserOptions, injector?: Injector): CreateDataConnectMutationResult<UpsertUserData, UpsertUserVariables, UpsertUserVariables>;

type UpsertBookOptions = DataConnectMutationOptionsUndefinedMutationFn<UpsertBookData, FirebaseError, UpsertBookVariables>;
export function injectUpsertBook(options?: UpsertBookOptions, injector?: Injector): CreateDataConnectMutationResult<UpsertBookData, UpsertBookVariables, UpsertBookVariables>;

export type BooksOptions = () => Omit<CreateDataConnectQueryOptions<BooksData, undefined>, 'queryFn'>;
export function injectBooks(options?: BooksOptions, injector?: Injector): CreateDataConnectQueryResult<BooksData, undefined>;

type ReadHistoryArgs = ReadHistoryVariables | (() => ReadHistoryVariables);
export type ReadHistoryOptions = () => Omit<CreateDataConnectQueryOptions<ReadHistoryData, ReadHistoryVariables>, 'queryFn'>;
export function injectReadHistory(args: ReadHistoryArgs, options?: ReadHistoryOptions, injector?: Injector): CreateDataConnectQueryResult<ReadHistoryData, ReadHistoryVariables>;
