const express = require('express');
const router = express.Router();
const CartItem = require('../models/CartItem');
const Order = require('../models/Order');

// POST /api/checkout
router.post('/', async (req, res) => {
  try {
    const { name, email } = req.body;
    const cart = await CartItem.find().populate('productId');
    if (!cart.length) return res.status(400).json({ error: 'Cart empty' });

    const items = cart.map(item => ({
      name: item.productId.name,
      price: item.productId.price,
      qty: item.qty,
      lineTotal: item.productId.price * item.qty
    }));

    const total = items.reduce((s, i) => s + i.lineTotal, 0);

    const order = await Order.create({ name, email, items, total });
    await CartItem.deleteMany({});
    res.json({ receipt: order });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
