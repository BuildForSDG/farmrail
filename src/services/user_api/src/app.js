import express from 'express';

import authRoute from './routes/auth';

const app = express();

app.use(express.json());

app.use('/api/v1/user', authRoute);

export default app;
