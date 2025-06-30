const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'ai-agent-for-book-recommendations',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

const upsertUserRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'upsertUser', inputVars);
}
upsertUserRef.operationName = 'upsertUser';
exports.upsertUserRef = upsertUserRef;

exports.upsertUser = function upsertUser(dcOrVars, vars) {
  return executeMutation(upsertUserRef(dcOrVars, vars));
};

const upsertBookRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'upsertBook', inputVars);
}
upsertBookRef.operationName = 'upsertBook';
exports.upsertBookRef = upsertBookRef;

exports.upsertBook = function upsertBook(dcOrVars, vars) {
  return executeMutation(upsertBookRef(dcOrVars, vars));
};

const upsertReadHistoryRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'upsertReadHistory', inputVars);
}
upsertReadHistoryRef.operationName = 'upsertReadHistory';
exports.upsertReadHistoryRef = upsertReadHistoryRef;

exports.upsertReadHistory = function upsertReadHistory(dcOrVars, vars) {
  return executeMutation(upsertReadHistoryRef(dcOrVars, vars));
};

const deleteReadHistoryRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'deleteReadHistory', inputVars);
}
deleteReadHistoryRef.operationName = 'deleteReadHistory';
exports.deleteReadHistoryRef = deleteReadHistoryRef;

exports.deleteReadHistory = function deleteReadHistory(dcOrVars, vars) {
  return executeMutation(deleteReadHistoryRef(dcOrVars, vars));
};

const booksRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'Books');
}
booksRef.operationName = 'Books';
exports.booksRef = booksRef;

exports.books = function books(dc) {
  return executeQuery(booksRef(dc));
};

const readHistoryRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ReadHistory', inputVars);
}
readHistoryRef.operationName = 'ReadHistory';
exports.readHistoryRef = readHistoryRef;

exports.readHistory = function readHistory(dcOrVars, vars) {
  return executeQuery(readHistoryRef(dcOrVars, vars));
};
