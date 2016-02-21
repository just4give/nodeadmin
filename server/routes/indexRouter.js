var express = require('express');
var router = express.Router();
var app = express();


/* GET home page. */
router.get('/', function(req, res) {
  console.log(req.user);
  res.render('index', { title: 'AppStackSolutions'});
});

module.exports = router;
