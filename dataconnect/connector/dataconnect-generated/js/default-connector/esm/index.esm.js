import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'default',
  service: 'ai-agent-for-book-recommendations',
  location: 'us-central1'
};

export const upsertUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'upsertUser', inputVars);
}
upsertUserRef.operationName = 'upsertUser';

export function upsertUser(dcOrVars, vars) {
  return executeMutation(upsertUserRef(dcOrVars, vars));
}

export const upsertBookRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'upsertBook', inputVars);
}
upsertBookRef.operationName = 'upsertBook';

export function upsertBook(dcOrVars, vars) {
  return executeMutation(upsertBookRef(dcOrVars, vars));
}

export const upsertReadHistoryRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'upsertReadHistory', inputVars);
}
upsertReadHistoryRef.operationName = 'upsertReadHistory';

export function upsertReadHistory(dcOrVars, vars) {
  return executeMutation(upsertReadHistoryRef(dcOrVars, vars));
}

export const deleteReadHistoryRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'deleteReadHistory', inputVars);
}
deleteReadHistoryRef.operationName = 'deleteReadHistory';

export function deleteReadHistory(dcOrVars, vars) {
  return executeMutation(deleteReadHistoryRef(dcOrVars, vars));
}

export const booksRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'Books');
}
booksRef.operationName = 'Books';

export function books(dc) {
  return executeQuery(booksRef(dc));
}

export const readHistoryRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ReadHistory', inputVars);
}
readHistoryRef.operationName = 'ReadHistory';

export function readHistory(dcOrVars, vars) {
  return executeQuery(readHistoryRef(dcOrVars, vars));
}

