import dynamo from 'dynamodb';

module.exports = {
  InitDB() {
    const User = dynamo.define('User', {
      hashKey: 'email',
      timestamps: true,

      schema: {
        email: Joi.string().email(),
        settings: {
          nickname: Joi.string(),
          acceptedTerms: Joi.boolean().default(false),
        },
      },
    });
  },
};
