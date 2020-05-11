import app from './app';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import config from './config';

dotenv.config();

mongoose
  .connect(config.databaseUrl[config.environment], {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log('connected to db'));

app.listen(3000, () => console.log(`server is Up and running on port:${3000}`));
