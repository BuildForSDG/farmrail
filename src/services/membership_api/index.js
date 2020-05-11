const express = require('express');
const mongoose = require('mongoose');

const app = express();

const helloMembers = require('./routes/memberRoute');
app.use(helloMembers);

app.listen(3000, () => console.log('connected to server'));
