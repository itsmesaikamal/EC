// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log(err));

// Routes
const shopifyCustomers = require('./routes/shopifyCustomers');
const shopifyProducts = require('./routes/shopifyProducts');
const shopifyOrders = require('./routes/shopifyOrders');

app.use('/api/customers', shopifyCustomers);
app.use('/api/products', shopifyProducts);
app.use('/api/orders', shopifyOrders);

// backend/server.js
const analytics = require('./routes/analytics');
app.use('/api/analytics', analytics);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
