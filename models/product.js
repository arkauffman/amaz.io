var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    name: String,
    price: String,
    description: String,
    sku: String
}, {
    timestamps: true
});

var orderSchema = new Schema({
   products: [productSchema] 
}, {
    timestamps: true
});

module.exports = mongoose.model('Order', orderSchema);