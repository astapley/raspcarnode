var express = require('express');
var router = express.Router();
var piblaster = require('pi-blaster.js');

router.get('/', function(req, res, next) {
  res.send('missing params /:throttle/:steering');
});

router.get('/:throttle/:steering', function(req, res, next) {
  var throttle = req.params.throttle/1000;
  var steering = req.params.steering/1000;
  piblaster.setPwm(17, throttle);
  piblaster.setPwm(18, steering);
  res.params.throttle = throttle;
  res.params.steering = steering;
  res.send(res.params);
});

module.exports = router;
