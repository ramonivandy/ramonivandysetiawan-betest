const validate = require('validate.js');

class User {
  constructor(db) {
    this.db = db
  }

  async getUser(payload) {
    if(payload.accountNumber){
      payload.accountNumber = parseInt(payload.accountNumber)
    }
    if(payload.identityNumber){
      payload.identityNumber = parseInt(payload.identityNumber)
    }

    try {
      const result = await this.db.find(payload).toArray();
      return result;
    } catch (error) {
      console.error('Error find user:', error);
      throw error;
    }
  };
  
  async createUser(payload) {
    try {
      const result = await this.db.insertOne(payload);
      return result;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  };
  
  async updateUser(payload, params) {
    params = { Id: parseInt(params.id) }
    try {
      // find data first
      const userData = await this.db.findOne(params);
      if (validate.isEmpty(userData)) {
        return {
          err: "User not found",
          data: null,
        }
      }
      const result = await this.db.updateOne(params, { $set: payload });
      return result.modifiedCount;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  
    res.status(200).send({
      success: true,
      data: 'return from update user'
    });
  };
  
  async deleteUser(payload) {
  
    res.status(200).send({
      success: true,
      data: 'return from delete user'
    });
  };
}

module.exports = User;