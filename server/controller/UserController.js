import bcrypt from 'bcryptjs';
import db from '../models/index';

class UserController {
  static userSignUp(req, res) {
    const { email, username, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    db.user.find({
      where: {
        email,
      },
    }).then((foundUser) => {
      if (foundUser) {
        res.status(409).json({
          status: 'success',
          message: 'User already exist!',
        });
      } else {
        db.user.create({
          email,
          username,
          password: hashedPassword,
        }).then((user) => {
          res.status(201).json({
            status: 'success',
            message: 'User Successfully Registered',
            data: {
              user: {
                email: user.email,
                username: user.username,
              },
            },
          });
        }).catch(error => res.status(500).json({
          status: 'fail',
          message: 'Service Unavailable',
          error,
        }));
      }
    });
  }
}

export default UserController;
