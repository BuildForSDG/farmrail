require('dotenv').config();

import express from 'express';
import helloMembers from './routes/memberRoute';

const app = express();

app.use(helloMembers);

console.log('Listening on port:', process.env.PORT);
