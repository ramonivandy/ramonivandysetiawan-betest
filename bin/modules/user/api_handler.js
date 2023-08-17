const jwt = require('../../helper/auth/jwt_auth_helper');
const validator = require('../../helper/validator/validator');
const commandModel = require('./command/command_models');
const commandHandler = require('./command/command_handler');

const generateToken = async (req, res) => {
  const token = await jwt.generateToken({});
  if(token.err){
    res.status(422).send({
      success: true,
      message: token.err
    });
  }

  res.status(200).send({success: true, message: 'success generate token', data: token});
};

const getUser = async (req, res) => {
  const params = req.query;
  const getData = () => commandHandler.getUser(params);

  const sendResponse = (result) => {
    (result.err)
      ? res.status(422).send({success: false, message: result.err})
      : res.status(200).send({success: true, message: 'success find user', data: result});
  };

  sendResponse(await getData());
};

const createUser = async (req, res) => {
  const payload = req.body;
  const validatePayload = validator.isValidPayload(payload, commandModel.user);
  if(validatePayload.err){
    res.send(422, {success: false, message: validatePayload.err.details[0].message});
  }

  const postRequest = (result) =>
    (result.err)
      ? result
      : commandHandler.createUser(result.data);

  const sendResponse = (result) => {
    (result.err)
      ? res.status(422).send({success: false, message: result.err})
      : res.status(200).send({success: true, message: 'success create user'});
  };

  sendResponse(await postRequest(validatePayload));
};

const updateUser = async (req, res) => {
  const payload = req.body;
  const params = req.params;
  const validatePayload = validator.isValidPayload(payload, commandModel.user);
  if(validatePayload.err){
    res.send(422, {success: false, message: validatePayload.err.details[0].message});
  }

  const postRequest = (result) =>
    (result.err)
      ? result
      : commandHandler.updateUser(result.data, params);

  const sendResponse = (result) => {
    (result.err)
      ? res.status(422).send({success: false, message: result.err})
      : res.status(200).send({success: true, message: 'success update user'});
  };

  sendResponse(await postRequest(validatePayload));
};

const deleteUser = async (req, res) => {
  const params = req.params;
  const postData = () => commandHandler.deleteUser(params);

  const sendResponse = (result) => {
    (result.err)
      ? res.status(422).send({success: false, message: result.err})
      : res.status(200).send({success: true, message: 'success delete user', data: result.data});
  };

  sendResponse(await postData());
};

module.exports = {
  getUser,
  generateToken,
  createUser,
  updateUser,
  deleteUser
};
