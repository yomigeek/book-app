import Joi from 'joi';

// function using the 'joi lib' for request validation
export const validateSignup = (user) => {
  const schema = {
    username: Joi.string().trim().min(5).required(),
    email: Joi.string().trim().email()
      .required(),
    password: Joi.string().trim().regex(/^[a-zA-Z0-9]{3,30}$/)
      .required(),
  };
  return Joi.validate(user, schema);
};

export const validateLogin = (user) => {
  const schema = {
    username: Joi.string().trim().min(5),
    email: Joi.string().email()
      .required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
      .required(),
  };
  return Joi.validate(user, schema);
};
