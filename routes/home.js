'use strict';

var express = require('express');
var router = express.Router();
var authMiddleware = require('../config/auth');


router.get('/', authMiddleware, function(req, res) {
  console.log(req.body);
  res.render('home')
});



// router.get('/register', function(req, res) {
//   res.render('register', {title: 'Register'});
// });

// router.get('/login', function(req, res) {
//   res.render('login', {title: 'Login'});
// });

module.exports = router;
