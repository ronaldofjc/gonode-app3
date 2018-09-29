const mongoose = require('mongoose');
const FactoryGirl = require('factory-girl');
const faker = require('faker');

const { factory } = FactoryGirl;

factory.setAdapter(new FactoryGirl.MongooseAdapter());

// User
factory.define('User', mongoose.model('User'), {
  name: faker.name.findName(),
  username: factory.seq('User.username', n => `user_${n}`),
  email: factory.seq('User.email', n => `user_${n}@email.com`),
  password: faker.internet.password(),
});

// Tweet
factory.define('Tweet', mongoose.model('Tweet'), {
  content: faker.lorem.sentence(),
  user: factory.assoc('User', '_id'),
});

module.exports = factory;
