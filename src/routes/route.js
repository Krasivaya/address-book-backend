const controller = require('../controllers/controller');
const router = require('express').Router();

router
  .post('/', controller.create)
  .get('/', controller.getAll)
  .delete('/', controller.deleteAll)

router
  .get('/user/:id', controller.getOne)
  .put('/user/:id', controller.updateOne)
  .delete('/user/:id', controller.deleteOne)

router.get('/blacklist', controller.getAllBlocked);

module.exports = router;