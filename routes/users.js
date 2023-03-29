var express = require('express');
var  sum=0;
var times =0;
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 
  times+=1;
  sum+=times;
  res.send('Sum is:'+sum);
});

module.exports = router;
