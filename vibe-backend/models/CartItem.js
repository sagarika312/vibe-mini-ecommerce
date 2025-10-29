const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  qty: { type: Number, default: 1 }
}, { timestamps: true });

module.exports = mongoose.model('CartItem', cartItemSchema);
