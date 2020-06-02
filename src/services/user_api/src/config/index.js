import dotenv from 'dotenv';

dotenv.config();

export default {
  url: process.env.APP_URL || 'http://localhost:3000',
  port: process.env.PORT || 3000,
  environment: process.env.NODE_ENV || 'development',

  databaseUrl: {
    development: process.env.DEV_DATABASE || 'mongodb://localhost:27017/db_dev',
    production: process.env.DB_CONNECT || 'mongodb://localhost:27017/db_production',
    test: process.env.TEST_DATABASE || 'mongodb://127.0.0.1:27017/db_test'
  },

  jwtSecret: process.env.JWT_SECRET || 'myjwtsecret',
  development: process.env.NODE_ENV === 'development',
  production: process.env.NODE_ENV === 'production',
  test: process.env.NODE_ENV === 'test'
};
