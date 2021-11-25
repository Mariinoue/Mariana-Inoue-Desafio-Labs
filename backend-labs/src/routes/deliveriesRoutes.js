const express = require('express')
const router = express.Router()
const controller = require('../controllers/deliveriesController')


router.get('/', controller.getAllDeliveries)

router.post('/',controller.createDelivery)

router.delete('/:id',controller.deleteDelivery)

module.exports = router