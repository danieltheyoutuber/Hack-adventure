var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const context = {
    title: 'Profile',
    name: 'Daniel Silva',
    age:12,
    position:'student',
    hobbies:['create','lego','movies','Fanta Uva','PS4'],
  }
  res.render('profile', context );
});

module.exports = router;
