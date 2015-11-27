var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/* GET users/wer listing. */
router.get('/wer', function(req, res, next) {
    res.send("This is wer router!");
});

module.exports = router;
