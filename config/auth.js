'use strict';

var User = require('../models/user');

module.exports = function(req,res,next){
  console.log(req.body)
  next();
}