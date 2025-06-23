const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// API to serve product list
app.get('/api/products', (req, res) => {
  const products = JSON.parse(fs.readFileSync('./products.json', 'utf-8'));
  res.json(products);
});

// API to accept checkout
app.post('/api/checkout', (req, res) => {
  const cart = req.body;
  console.log('Checkout received:', cart);
  res.json({ status: 'success', message: 'Order received!' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
