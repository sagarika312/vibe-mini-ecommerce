const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('../models/Product');

dotenv.config();

const products = [
  { name: 'Vibe T-Shirt', price: 499 },
  { name: 'Vibe Hoodie', price: 1299 },
  { name: 'Vibe Mug', price: 299 },
  { name: 'Vibe Cap', price: 199 },
  { name: 'Vibe Backpack', price: 1999 }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('Products seeded');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
