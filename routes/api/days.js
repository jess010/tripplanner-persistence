const router = require('express').Router();
const Day = require('../../models').Day;

router.get('/', (req, res, next) => {
  //route goes here
  //console.log('getting all days!')
  Day.findAll()
  .then(days => {
      res.json(days)
  })
  .catch(next)
})

router.get('/:id', (req, res, next) => {
  //post goes here
})

router.post('/', (req, res, next) => {
  Day.findAll()
  .then(days => {
    return new Promise(function (resolve) {return days.length})
  })
  .then(length => {
    return Day.create({
      name: length + 1
    })
  })
  .then(day => {
      res.json(day)
  })
  .catch(next)
})

router.delete('/:id', (req, res, next) => {
  //delete goes here
})

module.exports = router;
