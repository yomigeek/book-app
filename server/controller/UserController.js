import bcrypt from 'bcryptjs';

import db from '../models/index';
import { validatePassword, generateToken } from '../helper/auth';
import { validateLogin } from '../helper/validate';

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

  static userLogin(req, res) {
    const { error } = validateLogin(req.body);
    if (error) {
      res.status(400).json({
        Error: error.details[0].message.replace('"', '').replace('"', ''),
        status: 'success',
      });
      return;
    }
    const { email, password } = req.body;
    db.user.find({
      where: {
        email,
      },
    }).then((result) => {
      if (!result) {
        res.status(401).send({
          message: 'email does not exist',
        });
      } else {
        const user = result;
        const authValid = user ? validatePassword(user, password) : false;

        if (!authValid) {
          res.status(401).send({
            error: 'Incorrect password',
          });
        } else {
          const token = generateToken(user);
          res.status(200).header({
            authorization: token,
          }).send({
            status: 'success',
            message: `Welcome back User ${user.username}`,
            data: {
              user: {
                id: user.id,
                email: user.email,
                username: user.username,
              },
            },
          });
        }
      }
    }).catch((err) => {
      res.status(500).send({
        staus: 'failed',
        message: 'service unavailable',
        err,
      });
    });
  }
}

export default UserController;
