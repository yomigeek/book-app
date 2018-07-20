import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const validatePassword = (user, password) => bcrypt.compareSync(password, user.password);

export const generateToken = (user) => {
  const access = 'auth';
  const token = jwt.sign({ id: user.id, access },
    process.env.JWT_SECRET, { expiresIn: 24 * 60 * 60 }).toString();
  return token;
};
