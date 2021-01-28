const Joi = require('joi');

module.exports = {
  UserTable(dynamo) {
    const User = dynamo.define('User', {
      hashKey: 'username',
      timestamps: true,

      schema: {
        username: Joi.string().min(3).max(30).required().alphanum(),
        password: Joi.string().min(8).max(30).required(),
      },
    });
    return User;
  },
};
