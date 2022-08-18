const express = require('express');
const router = express.Router();

const { users } = require('./addUser');

router.get('/', (req, res, next) => {
  res.render('show-users', {
    users,
    pageTitle: 'List of all users',
  });
});

module.exports = router;
