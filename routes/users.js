var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/* GET users listing. */
router.get('/wer', function(req, res, next) {
  res.send('respond with a resoue3wqr4ewt54ey65yrce');
});

module.exports = router;
