var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: "这里是第一个页面", name: 'Echo', age: 24, gender: "female", cols: [{name: "Shasha", age: 23}, {name: 'shaohua', age: 34}]});
  next();
});

module.exports = router;
