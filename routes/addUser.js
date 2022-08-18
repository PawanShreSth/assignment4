const express = require('express');
const router = express.Router();

const users = [];

router.get('', (req, res, next) => {
  res.render('add-user', {
    pageTitle: 'Add User',
  });
});

router.post('/add-user', (req, res, next) => {
  users.push(req.body.name);
  console.log(users);
  res.redirect('/users');
});

exports.users = users;
exports.routes = router;
