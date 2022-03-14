const mainController = require('./../controllers/mainController')

const express = require('express');
const router = express.Router();

router.get('/',mainController.index)
router.get('/companies',mainController.getCompanies)
router.post('/companies',mainController.createCompanie)
router.post('/forms',mainController.sendData)

module.exports = router;