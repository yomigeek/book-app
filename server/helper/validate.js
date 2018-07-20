import Joi from 'joi';

// function using the 'joi lib' for request validation

const validateLogin = (user) => {
  const schema = {
    username: Joi.string().trim().min(5),
    email: Joi.string().email()
      .required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
      .required(),
  };
  return Joi.validate(user, schema);
};
const validateParams = (params) => {
  const schema = {
    bookId: Joi.number().integer().positive(),
  };
  return Joi.validate(params, schema);
};
export { validateLogin, validateParams };
