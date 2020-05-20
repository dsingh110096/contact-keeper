const express = require('express');
const router = express.Router();

// @route    GET /api/contacts
// @desc     Get all users contacts
// @access   Private

router.get('/', (req, res) => {
  //here above '/' equals to /api/users/
  res.send('Get all contacts');
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