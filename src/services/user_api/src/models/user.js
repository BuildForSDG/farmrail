import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';

import Email from '../utils/Email';
import config from '../config';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 255
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
    unique: true
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024
  },
  emailConfirmCode: String,
  date: {
    type: Date,
    default: Date.now
  }
});

userSchema.pre('save', async function () {
  this.password = bcrypt.hashSync(this.password);

  const token = crypto.randomBytes(32).toString('hex');
  this.emailConfirmCode = crypto.createHash('sha256').update(token).digest('hex');
});

userSchema.post('save', async function () {
  await this.sendEmailVerificationEmail();
});

userSchema.methods.comparePasswords = function (password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.methods.generateToken = function () {
  return jwt.sign({ id: this._id }, config.jwtSecret);
};

userSchema.methods.sendEmailVerificationEmail = function () {
  return new Email(this, `${config.url}/auth/emails/confirm/${this.emailConfirmCode}`).sendWelcome();
};

userSchema.methods.forgotPassword = async function () {
  const token = crypto.randomBytes(32).toString('hex');

  await PasswordReset.create({
    token,
    email: this.email,
    createdAt: new Date()
  });

  await this.sendForgotPasswordEmail(token);
};

userSchema.methods.sendForgotPasswordEmail = async function (token) {
  await new Email('forgot-password')
    .to(this.email)
    .subject('You requested for a password reset.')
    .data({
      name: this.name,
      url: `${config.url}/auth/passwords/reset/${token}`
    })
    .send();
};

export default mongoose.model('User', userSchema);
