const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
// import Routes
const authRoute = require('./routes/auth');

dotenv.config();
// connect to db
mongoose.connect(process.env.DB_CONNECT, () => console.log('connected to db'));

//middle ware
app.use(express.json());
// route "middle-ware"
app.use('/api/user', authRoute);

app.listen(3000, () => console.log('server is Up and running'));
