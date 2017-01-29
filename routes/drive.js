var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('missing params /:throttle/:steering');
});

router.get('/:throttle/:steering', function(req, res, next) {
  res.send(req.params);
});

module.exports = router;
