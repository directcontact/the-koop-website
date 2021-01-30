const { OrderTable } = require('../models/order');
const { UserTable } = require('../models/user');
const uuid = require('uuid');

module.exports = {
  async InitDB(dynamo) {
    const Order = OrderTable(dynamo);
    const User = UserTable(dynamo);
    dynamo.createTables(
      {
        User: User,
        Order: Order,
      },
      function (err) {
        if (err) {
          console.log('Error creating tables: ', err);
        } else {
          console.log('Tables has been created');
        }
      }
    );
  },

  async AddDummmyUser(dynamo) {
    const User = UserTable(dynamo);
    try {
      const admin = new User({ username: 'test', password: 'password' });
      await admin.save();
      console.log('created account in DynamoDB', admin.get('username'));
    } catch (err) {
      console.log('error in saving account', err);
    }
  },

  async AddDummyOrders(dynamo) {
    const Order = OrderTable(dynamo);
    const dummyOrders = [
      {
        id: uuid.v4(),
        name: 'Tom',
        pickup: Date.now(),
        notes: 'Extra spicy',
        items: [
          {
            name: 'spicy soy garlic small whole chicken',
            quantity: 1,
            price: 9.95,
          },
          {
            name: 'extra spicy large wings chicken',
            quantity: 1,
            price: 20.95,
          },
        ],
      },
      {
        id: uuid.v4(),
        name: 'Sharon',
        pickup: Date.now(),
        notes: '',
        items: [
          {
            name: 'daegi bulgogi',
            quantity: 2,
            price: 12.95,
          },
        ],
      },
      {
        id: uuid.v4(),
        name: 'Arnold',
        pickup: Date.now(),
        notes: 'Extra spicy',
        items: [
          {
            name: 'budae jigae',
            quantity: 1,
            price: 11.95,
          },
        ],
      },
      {
        id: uuid.v4(),
        name: 'James',
        pickup: Date.now(),
        notes: '',
        items: [
          {
            name: 'spicy trotter',
            quantity: 1,
            price: 29.0,
          },
          {
            name: 'gangjeong',
            quantity: 1,
            price: 22.95,
          },
          {
            name: 'original trotter',
            quantity: 2,
            price: 27.0,
          },
          {
            name: 'mackerel combo',
            quantity: 3,
            price: 10.95,
          },
        ],
      },
    ];

    Order.create(dummyOrders, function (err, orders) {
      console.log(err);
    });
  },
};
