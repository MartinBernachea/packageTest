const mainController = require('./../controllers/mainController')

const express = require('express');
const router = express.Router();

router.get('/',mainController.index)
router.get('/companies',mainController.getCompanies)
router.post('/companies',mainController.createCompanie)
router.get('/forms:id',mainController.checkStatus)
router.post('/forms',mainController.sendData)

// fake-carrier-api.skydropx.com


module.exports = router;