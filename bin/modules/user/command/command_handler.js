const jwt = require('../../../helper/auth/jwt_auth_helper');
const { client } = require('../../../helper/database/mongodb/mongodb');
const User = require('./domain');

const getUser = async (payload) => {
};

const generateToken = async (payload) => {
};

const createUser = async (payload) => {
  const db = client.db('db_ramonivandysetiawan_betest');
  const dbCollection = db.collection('users');
  const user = new User(dbCollection)
  const postCommand = async () => await user.createUser(payload);
  return await postCommand();
};

const updateUser = async (payload) => {
};

const deleteUser = async (payload) => {
};

module.exports = {
  getUser,
  generateToken,
  createUser,
  updateUser,
  deleteUser
};
