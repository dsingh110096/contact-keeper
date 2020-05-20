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

router.post(
  '/',
  //here above '/' equals to /api/users/
  [
    auth,
    [
      check('name', 'Name is Required').not().isEmpty(),
      check('email', 'Please include a valid email').isEmail(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //destructuring from req.body
    const { name, email, phone, type } = req.body;
    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });
      const contact = await newContact.save();
      res.json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error...');
    }
  }
);

// @route    PUT /api/contacts/:id
// @desc     Update contact
// @access   private

router.put('/:id', auth, async (req, res) => {
  //here above '/' equals to /api/users/

  //destructuring from req.body
  const { name, email, phone, type } = req.body;

  //Build contact object
  const contactFields = {};
  if (name) contactFields.name = name;
  if (email) contactFields.email = email;
  if (phone) contactFields.phone = phone;
  if (type) contactFields.type = type;

  try {
    let contact = await Contact.findById(req.params.id);
    //params is used to access '/:id'
    if (!contact) return res.status(404).json({ msg: 'Contact not found' });

    //make sure user owns the contact
    if (contact.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }
    //updating the contact
    contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { $set: contactFields },
      { new: true }
    );
    //sending to client the updated contact
    res.json(contact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error..');
  }
});

// @route    DELETe /api/contacts/:id
// @desc     Delete contact
// @access   private

router.delete('/:id', auth, async (req, res) => {
  //here above '/' equals to /api/users/
  try {
    let contact = await Contact.findById(req.params.id);
    //params is used to access '/:id'
    if (!contact) return res.status(404).json({ msg: 'Contact not found' });

    //make sure user owns the contact
    if (contact.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }
    //deleting the contact
    await Contact.findByIdAndRemove(req.params.id);
    //sending response to the client.
    res.json({ msg: 'Contact removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error..');
  }
});

module.exports = router;
