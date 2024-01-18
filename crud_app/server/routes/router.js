const express = require('express');
const router = express.Router();

const services = require('../services/render');
const controller = require('../controller/controller');
/**
 * @description Root Route
 * @method GET /index
 */

router.get('/', services.homeRoutes );

/**
 * @description add users
 * @method GET /add_user
 */

router.get('/add-user', services.add_user);

/**
 * @description update user
 * @method GET /update_user
 */

router.get('/update_user', services.update_user);


// API
router.post('/api/users', controller.create);
router.get('/api/users', controller.find);
router.put('/api/users/:id', controller.update);
router.delete('/api/users/:id', controller.delete);

module.exports = router;