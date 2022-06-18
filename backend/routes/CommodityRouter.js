const express = require('express')

const { getCommodity } = require('../controllers/CommodityController')

const router = express.Router()

router.get('/commodity', getCommodity)

module.exports = router