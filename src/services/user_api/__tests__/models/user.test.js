const User = require('../../src/models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const config = require('../../src/config');

const user = {
  name: 'New User',
  email: 'newuser@gmail.com',
  password: 'newpass'
};

let newuser;

jest.setTimeout(10000);

describe('The User Model', () => {
  beforeAll(async () => {
    await mongoose.connect(config.databaseUrl.test, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });

    newuser = await User.create(user);
  });

  it('Should hash the user password before saving to the database', async () => {
    expect(bcrypt.compareSync(user.password, newuser.password)).toBe(true);
  });

  it('Should set the date for a new created user', async () => {
    expect(newuser.date).toBeDefined();
    expect(newuser.date).toEqual(expect.any(Date));
  });

  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });
});
