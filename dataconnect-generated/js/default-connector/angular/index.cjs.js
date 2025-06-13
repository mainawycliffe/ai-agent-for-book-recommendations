const { upsertUserRef, upsertBookRef, booksRef, readHistoryRef } = require('../');
const { DataConnect, CallerSdkTypeEnum } = require('@angular/fire/data-connect');
const { injectDataConnectQuery, injectDataConnectMutation } = require('@tanstack-query-firebase/angular/data-connect');
const { inject, EnvironmentInjector } = require('@angular/core');

exports.injectUpsertUser = function injectUpsertUser(args, injector) {
  return injectDataConnectMutation(upsertUserRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

exports.injectUpsertBook = function injectUpsertBook(args, injector) {
  return injectDataConnectMutation(upsertBookRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

exports.injectBooks = function injectBooks(options, injector) {
  const finalInjector = injector || inject(EnvironmentInjector);
  const dc = finalInjector.get(DataConnect);
  return injectDataConnectQuery(() => {
    const addOpn = options && options();
    return {
      queryFn: () =>  booksRef(dc),
      ...addOpn
    };
  }, finalInjector, CallerSdkTypeEnum.GeneratedAngular);
}

exports.injectReadHistory = function injectReadHistory(args, options, injector) {
  const finalInjector = injector || inject(EnvironmentInjector);
  const dc = finalInjector.get(DataConnect);
  const varsFactoryFn = (typeof args === 'function') ? args : () => args;
  return injectDataConnectQuery(() => {
    const addOpn = options && options();
    return {
      queryFn: () =>  readHistoryRef(dc, varsFactoryFn()),
      ...addOpn
    };
  }, finalInjector, CallerSdkTypeEnum.GeneratedAngular);
}

