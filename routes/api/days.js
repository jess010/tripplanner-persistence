const router = require('express').Router();
const Day = require('../../models').Day;

router.get('/', (req, res, next) => {
  //route goes here
  console.log('getting all days!')
  Day.findAll()
  .then(days => {
      res.json('getting all days!')
  })
  .catch(next)
})

router.get('/:id', (req, res, next) => {
  //post goes here
})

router.post('/', (req, res, next) => {
  //post goes here
  console.log('getting post!')
  Day.findAll()
  .then(days => {
      res.json('getting post!')
  })
  .catch(next)
})

router.delete('/:id', (req, res, next) => {
  //delete goes here
})

module.exports = router;
