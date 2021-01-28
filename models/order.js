const Joi = require('joi');

module.exports = {
  OrderTable(dynamo) {
    const Order = dynamo.define('Order', {
      hashKey: 'id',
      timestamps: true,

      schema: {
        id: dynamo.types.uuid(),
        name: Joi.string().alphanum(),
        pickup: Joi.date().timestamp(),
        notes: Joi.string().min(0).max(250).allow(null, ''),
        items: Joi.array().items(
          Joi.object({
            name: Joi.string(),
            quantity: Joi.number(),
            price: Joi.number(),
          })
        ),
      },
    });

    return Order;
  },
};
