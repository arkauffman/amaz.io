require('dotenv').config();
require('./database');
const Product = require('./../models/product')
const API = require('./API')

const seed = new Promise(function(resolve, reject) {
  resolve(Product.remove({}))
})

seed.then(() => {
  return Product.create(API)
})

.then((products) => {
  console.log(products)
  require('mongoose').connection.close();
  process.exit();
})