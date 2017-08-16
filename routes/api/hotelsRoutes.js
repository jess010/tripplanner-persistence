var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../../models').Hotel;

router.get('/', function (req, res, next) {
    Hotel.findAll()
    .then(hotels => {
        console.log(hotels)
        res.json(hotels)
    })
    .catch(next)
})

module.exports = router;
