const router = require('express').Router();
const Day = require('../../models').Day;

router.get('/', (req, res, next) => {
  Day.findAll()
  .then(days => {
      res.json(days)
  })
  .catch(next)
})

router.get('/:id', (req, res, next) => {

})

router.post('/', (req, res, next) => {
  Day.findAll()
  .then(days => {
    console.log(days)
    return days.length
  })
  .then(length => {
    return Day.create({
      number: length + 1
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
