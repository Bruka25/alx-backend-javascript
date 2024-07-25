const express = require('express');
const app = express();

const PORT = 7865;

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Endpoint for GET /cart/:id
app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

// Endpoint for GET /available_payments
app.get('/available_payments', (req, res) => {
  const paymentMethods = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  };
  res.json(paymentMethods);
});

// Endpoint for POST /login
app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.send(`Welcome ${userName}`);
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
