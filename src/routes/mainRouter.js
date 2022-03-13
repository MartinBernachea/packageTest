const platosController = require('./../controllers/mainController')

const express = require('express');
const router = express.Router();

router.get('/',platosController.index)

router.get('/detalle/:id',platosController.detail)


module.exports = router;