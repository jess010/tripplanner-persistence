var Promise = require('bluebird');
var router = require('express').Router();
var Restaurant = require('../../models').Restaurant;

router.get('/', function (req, res, next) {
  Restaurant.findAll()
  .then(restaurants => {
      res.json(restaurants)
  })
  .catch(next)
})

module.exports = router;
