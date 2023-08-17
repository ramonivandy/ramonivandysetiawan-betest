class User {
  constructor(db) {
    this.db = db
  }

  async getUser(payload) {
    console.log(client.db);
    res.status(200).send({
      success: true,
      data: 'return from get user'
    });
  };
  
  async generateToken(payload) {
    const token = await jwt.generateToken({});
    if(token.err){
      res.status(422).send({
        success: true,
        message: token.err
      });
    }
  
    res.status(200).send({
      success: true,
      data: token
    });
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
  
  async updateUser(payload) {
  
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