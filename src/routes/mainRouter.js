const mainController = require('./../controllers/mainController')

const express = require('express');
const router = express.Router();

router.get('/',mainController.index);
router.get('/test',mainController.test);
router.get('/companies',mainController.getCompanies);
router.post('/companie',mainController.createCompanie);
router.get('/shipments',mainController.getShipments);
router.post('/shipment',mainController.createShipment);
router.post('/shipmentStatus',mainController.checkStatus);
router.get('/document/:id',mainController.returnDocument);

module.exports = router;