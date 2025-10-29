const express = require('express');
const router = express.Router();
const CartItem = require('../models/CartItem');
const Product = require('../models/Product');

// GET /api/cart
router.get('/', async (req, res) => {
  try {
    const cart = await CartItem.find().populate('productId');
    const cartData = cart.map(item => ({
      id: item._id,
      productId: item.productId._id,
      name: item.productId.name,
      price: item.productId.price,
      qty: item.qty,
      lineTotal: item.productId.price * item.qty
    }));
    const total = cartData.reduce((s, it) => s + it.lineTotal, 0);
    res.json({ cart: cartData, total });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/cart
router.post('/', async (req, res) => {
  try {
    const { productId, qty } = req.body;
    if (!productId || !qty) return res.status(400).json({ error: 'productId and qty required' });

    const existing = await CartItem.findOne({ productId });
    if (existing) {
      existing.qty += qty;
      await existing.save();
    } else {
      await CartItem.create({ productId, qty });
    }
    res.json({ message: 'Added to cart' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// PUT /api/cart/:id/decrement
router.put('/:id/decrement', async (req, res) => {
  try {
    const item = await CartItem.findById(req.params.id);
    if (!item) return res.status(404).json({ error: 'Item not found' });

    item.qty -= 1;
    if (item.qty <= 0) {
      await CartItem.findByIdAndDelete(req.params.id);
      res.json({ message: 'Item removed from cart' });
    } else {
      await item.save();
      res.json({ message: 'Quantity decreased' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// DELETE /api/cart/:id
router.delete('/:id', async (req, res) => {
  try {
    await CartItem.findByIdAndDelete(req.params.id);
    res.json({ message: 'Removed from cart' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
