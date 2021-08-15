const {Router} = require('express');

const controller = require('../controllers/contacto.controller');

const router = Router();

router.post('/contact', controller.form );

module.exports = router;