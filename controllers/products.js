const Product = require('../models/product')

const index = (req, res) => {
  Product.find({}, function (error, products) {
    res.json(products)
  })
}

module.exports = {index}