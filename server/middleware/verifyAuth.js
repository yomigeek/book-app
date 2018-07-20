import jwt from 'jsonwebtoken';

const verifyAuth = (req, res, next) => {
  if (!req.headers.authorization) return res.status(404).json({ status: 'failed', message: 'Token not found' });
  return jwt.verify(req.headers.authorization, process.env.JWT_SECRET, (error, decoded) => {
    if (error) return res.status(401).json({ status: 'failed', message: 'Authentication failed' });
    req.decoded = decoded;
    return next();
  });
};
export default verifyAuth;
