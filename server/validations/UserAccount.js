import Joi from 'joi';
import userSignUpSchema from './Joi/Schema';
import options from './Joi/options';

// User Signup Validation
const userSignUpValidate = (req, res, next) => {
  if ((!req.body.username) || (!req.body.password) || (!req.body.email)) {
    return res.status(400).json({
      status: 'fail',
      message: 'Signup data is missing or cannot be empty! Must provide username, email, password',
    });
  }

  const userDetails = {
    username: req.body.username.trim(),
    password: req.body.password.trim(),
    email: req.body.email.trim(),
  };

  return Joi.validate(userDetails, userSignUpSchema, options, (err) => {
    if (!err) {
      return next();
    }
    return res.status(422).json({
      status: 'fail',
      error: err.details[0].message,
    });
  });
};


export default userSignUpValidate;
