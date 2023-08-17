const getUser = async (req, res) => {

  res.status(200).send({
    success: true,
    data: 'return from get user'
  });
};

const generateToken = async (req, res) => {

  res.status(200).send({
    success: true,
    data: 'return from generate token'
  });
};

const createUser = async (req, res) => {

  res.status(200).send({
    success: true,
    data: 'return from create user'
  });
};

const updateUser = async (req, res, id) => {

  res.status(200).send({
    success: true,
    data: 'return from update user'
  });
};

const deleteUser = async (req, res) => {

  res.status(200).send({
    success: true,
    data: 'return from delete user'
  });
};

module.exports = {
  getUser,
  generateToken,
  createUser,
  updateUser,
  deleteUser
};
