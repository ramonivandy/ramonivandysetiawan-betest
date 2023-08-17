const validator = require('../../helper/validator/validator')
const commandModel = require('./command/command_models');
const commandHandler = require('./command/command_handler');

const generateToken = async (req, res) => {
};

const getUser = async (req, res) => {
  const params = req.query;
  const getData = () => commandHandler.getUser(params);

  const sendResponse = (result) => {
    (result.err)
      ? res.status(422).send({success: false, message: result.err})
      : res.status(200).send({success: true, message: "success find user", data: result});
  };

  sendResponse(await getData());
};

const createUser = async (req, res) => {
  const payload = req.body;
  const validatePayload = validator.isValidPayload(payload, commandModel.user)
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
      : res.status(200).send({success: true, message: "success create user"})
  };

  sendResponse(await postRequest(validatePayload));
};

const updateUser = async (req, res, id) => {
};

const deleteUser = async (req, res) => {
};

module.exports = {
  getUser,
  generateToken,
  createUser,
  updateUser,
  deleteUser
};
