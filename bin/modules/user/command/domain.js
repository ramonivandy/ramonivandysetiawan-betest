const validate = require('validate.js');

class User {
  constructor(db) {
    this.db = db;
  }

  async getUser(payload) {
    if(payload.accountNumber){
      payload.accountNumber = parseInt(payload.accountNumber);
    }
    if(payload.identityNumber){
      payload.identityNumber = parseInt(payload.identityNumber);
    }

    try {
      const result = await this.db.find(payload).toArray();
      return result;
    } catch (error) {
      return {
        err: error,
        data: null
      };
    }
  }

  async createUser(payload) {
    try {
      const result = await this.db.insertOne(payload);
      return result;
    } catch (error) {
      return {
        err: error,
        data: null
      };
    }
  }

  async updateUser(payload, params) {
    params = { Id: parseInt(params.id) };
    try {
      // find data first
      const userData = await this.db.findOne(params);
      if (validate.isEmpty(userData)) {
        return {
          err: 'User not found',
          data: null,
        };
      }
      const result = await this.db.updateOne(params, { $set: payload });
      return result.modifiedCount;
    } catch (error) {
      return {
        err: error,
        data: null
      };
    }
  }

  async deleteUser(params) {
    params = { Id: parseInt(params.id) };
    try {
      // find data first
      const userData = await this.db.findOne(params);
      if (validate.isEmpty(userData)) {
        return {
          err: 'User not found',
          data: null,
        };
      }
      const result = await this.db.deleteOne(params);
      return {
        err: null,
        data: result.deleteCount,
      };
    } catch (error) {
      return {
        err: error,
        data: null
      };
    }
  }
}

module.exports = User;
