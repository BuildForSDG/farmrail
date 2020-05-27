import express from 'express';
import helloMembers from './routes/memberRoute';

const app = express();

app.use(helloMembers);

require('dotenv').config();

console.log('Listening on port:', process.env.PORT);
