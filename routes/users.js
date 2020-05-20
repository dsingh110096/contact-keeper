const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/User');
const { check, validationResult } = require('express-validator');

// @route    POST /api/users
// @desc     Register a user
// @access   Public

router.post(
  '/',
  //here above '/' equals to /api/users/
  [
    check('name', 'Please add name').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //destructuring from req.body
    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ msg: 'user already exists' });
      }

      //creating user if no user found
      user = new User({ name, email, password });

      //encrypting password
      const salt = await bcrypt.genSalt(10);

      //set password string to hash password
      user.password = await bcrypt.hash(password, salt);

      //saving user to database
      await user.save();

      //object 'payload' that will we sent to token
      const payload = {
        user: {
          id: user.id,
        },
      };
      //generating the jsonwebtoken
      jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 36000 }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error..');
    }
  }
);

module.exports = router;
