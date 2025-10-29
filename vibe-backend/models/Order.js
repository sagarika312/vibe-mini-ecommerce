const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  name: String,
  email: String,
  items: [
    {
      name: String,
      price: Number,
      qty: Number,
      lineTotal: Number
    }
  ],
  total: Number,
  timestamp: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
