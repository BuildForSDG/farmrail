import User from '../models/user';

export const register = async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  try {
    const savedUser = await user.save();
    res.status(201).json({
      status: 'success',
      user: savedUser
    });
  } catch (err) {
    res.status(400).send({
      status: 'fail',
      error: err.message
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        status: 'fail',
        error: 'Username or email is invalid'
      });
    }

    if (!user.comparePasswords(password)) {
      return res.status(404).json({
        status: 'fail',
        error: 'Username or email is invalid'
      });
    }

    const token = await user.generateToken();

    return res.status(200).json({
      status: 'success',
      token,
      data: {
        user
      }
    });
  } catch (e) {
    res.status(500).json({
      status: 'fail',
      error: e.error
    });
  }
};

export const forgotPassword = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return next(new AppError('There is no user with that email address', 404));

  // Generate random reset token
  const resetToken = user.createToken('resetPassword');
  await user.save({ validateBeforeSave: false });

  try {
    // Send the token back as reset link
    const resetURL = `${req.protocol}://${req.get('host')}/api/v1/users/resetPassword/${resetToken}}`;

    await new Email(user, resetURL).sendPasswordReset();

    res.status(200).json({
      status: 'Success',
      message: 'Reset token sent to email address'
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });

    return next(new AppError('Error sending email. Try again later', 500));
  }
};

// Reset Password
export const resetPassword = async (req, res) => {
  // get token from req
  const hashedToken = crypto.createHash('sha256').update(req.params.token).digest('hex');

  // get user with the hashed token and check if token hasn't yet expiried
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() }
  });

  // If there is no user, then the token is invalid or has expired
  if (!user) return next(new AppError('Token is invalid or has expired', 400));

  // Update user's new password and delete the reset token and reset exipry
  user.password = req.body.password;
  user.passwordConfirm = req.body.password;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();

  // Sign in user and send an auth token
  createAuthToken(user, 200, res);
};

export const confirmAccount = async (req, res) => {
  // get token from the url
  const hashedToken = crypto.createHash('sha256').update(req.params.token).digest('hex');

  const user = await User.findOne({
    confirmAccountToken: hashedToken,
    confirmAccountExpires: { $gt: Date.now() }
  });

  // If there is no user, then the token is invalid or has expired
  if (!user) return next(new AppError('Token is invalid or has expired', 400));

  user.accountActivated = true;
  user.confirmAccountToken = undefined;
  user.confirmAccountExpires = undefined;
  await user.save({ validateBeforeSave: false });

  res.status(200).json({
    status: 'Success',
    message: 'Account email confirmaed'
  });
};

export const protect = async (req, res, next) => {
  let token = '';
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) return next(new AppError('Please login', 401));

  // Verify the token. jwt.verify requires a callback which is converted to an async function using promisify
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // Check if user still exists
  const checkUser = await User.findById(decoded.id);
  if (!checkUser) return next(new AppError('User no longer exists. Please login again', 401));

  // Check if user changed password after the token was issued
  if (checkUser.changedPasswordAfterToken(decoded.iat))
    return next(new AppError('User recently changed password, Please login again', 401));

  // GRANT ACCESS TO PROTECTED ROUTE
  req.user = checkUser;
  next();
};

// Restrict certain routes to authorized user roles
export const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role))
      return next(new AppError('You do not have permission to perform this action', 403));

    next();
  };
};
