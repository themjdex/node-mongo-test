const Router = require('../framework/router');
const controller = require('../src/user-controller');
const router = new Router();

router.get('/users', controller.getUser)

router.post('/users', controller.createUser)

module.exports = router