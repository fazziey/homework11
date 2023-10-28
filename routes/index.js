const router = require('express').Router()
const todoRoute = require('./todo');

router.use('/', todoRoute);

module.exports = router