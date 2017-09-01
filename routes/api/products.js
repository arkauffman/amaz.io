const express = require('express');
const router = express.Router();
const User = require('../../models/product');
const productsCtrl = require('../../controllers/products');

router.get('/', productsCtrl.index);

module.exports = router;