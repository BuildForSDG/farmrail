import express from 'express';

import {
  register,
  login,
  forgotPassword,
  resetPassword,
  restrictTo,
  confirmAccount
} from './../controllers/authController';

const router = express.Router();

router.post('/register', register);

router.post('/login', login);

router.post('/forgotPassword', forgotPassword);

router.post('/resetPassword', resetPassword);

router.post('/confirmAccounr', confirmAccount);

export default router;
