var mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  id: String,
  title: String,
  image: String,
  price: Number,
  likes: Number,
  description: String,
})

module.exports = mongoose.model('productSchema', productSchema);


