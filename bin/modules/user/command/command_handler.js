const { client } = require('../../../helper/database/mongodb/mongodb');
const User = require('./domain');
const config = require('../../../helper/global_config')
const databaseName = config.get("/mongodb_db_name")

const getUser = async (payload) => {
  const db = client.db(databaseName);
  const dbCollection = db.collection('users');
  const user = new User(dbCollection);

  const getCommand = async () => await user.getUser(payload);
  return await getCommand();
};

const createUser = async (payload) => {
  const db = client.db(databaseName);
  const dbCollection = db.collection('users');
  const user = new User(dbCollection);

  const postCommand = async () => await user.createUser(payload);
  return await postCommand();
};

const updateUser = async (payload, params) => {
  const db = client.db(databaseName);
  const dbCollection = db.collection('users');
  const user = new User(dbCollection);

  const postCommand = async () => await user.updateUser(payload, params);
  return await postCommand();
};

const deleteUser = async (params) => {
  const db = client.db(databaseName);
  const dbCollection = db.collection('users');
  const user = new User(dbCollection);

  const postCommand = async () => await user.deleteUser(params);
  return await postCommand();
};

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser
};
