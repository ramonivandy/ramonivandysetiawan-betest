const { client } = require('../../../helper/database/mongodb/mongodb');
const User = require('./domain');

const getUser = async (payload) => {
  const db = client.db('db_ramonivandysetiawan_betest');
  const dbCollection = db.collection('users');
  const user = new User(dbCollection);

  const getCommand = async () => await user.getUser(payload);
  return await getCommand();
};

const createUser = async (payload) => {
  const db = client.db('db_ramonivandysetiawan_betest');
  const dbCollection = db.collection('users');
  const user = new User(dbCollection);

  const postCommand = async () => await user.createUser(payload);
  return await postCommand();
};

const updateUser = async (payload, params) => {
  const db = client.db('db_ramonivandysetiawan_betest');
  const dbCollection = db.collection('users');
  const user = new User(dbCollection);

  const postCommand = async () => await user.updateUser(payload, params);
  return await postCommand();
};

const deleteUser = async (params) => {
  const db = client.db('db_ramonivandysetiawan_betest');
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
