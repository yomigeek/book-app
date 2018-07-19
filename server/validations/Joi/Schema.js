import Joi from 'joi';

// User SignUp Joi Schema
const userSignUpSchema = Joi.object().keys({
  username: Joi.string()
    .min(2)
    .regex(/^[a-zA-Z0-9- ]*$/)
    .required(),
  password: Joi.string().min(5).required(),
  email: Joi.string()
    .email()
    .required(),
});

export default userSignUpSchema;
