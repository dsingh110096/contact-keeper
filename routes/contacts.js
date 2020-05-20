const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Contact = require('../models/Contact');

// @route    GET /api/contacts
// @desc     Get all users contacts
// @access   Private

router.get('/', auth, async (req, res) => {
  //here above '/' equals to /api/users/
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 });
    //date:-1 will most recent contact
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST /api/contacts
// @desc     Add new contact
// @access   private

router.post('/', (req, res) => {
  //here above '/' equals to /api/users/
  res.send('Add contact');
});

// @route    PUT /api/contacts/:id
// @desc     Update contact
// @access   private

router.put('/:id', (req, res) => {
  //here above '/' equals to /api/users/
  res.send('Update contact');
});

// @route    DELETe /api/contacts/:id
// @desc     Delete contact
// @access   private

router.delete('/:id', (req, res) => {
  //here above '/' equals to /api/users/
  res.send('Delete contact');
});

module.exports = router;
