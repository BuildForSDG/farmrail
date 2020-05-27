import express from 'express';
import mongoose from 'mongoose';

const app = express();
var port = process.env.PORT || 3000;

import helloMembers from './routes/memberRoute';

app.use(helloMembers);

app.listen(port, function () {
  console.log(` listening on port ${port}!`);
});
