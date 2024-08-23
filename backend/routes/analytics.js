// backend/routes/analytics.js
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const moment = require('moment');

router.get('/total-sales', async (req, res) => {
    try {
        const orders = await mongoose.connection.db.collection('shopifyOrders').find({}).toArray();
        
        // Aggregate sales data over time
        const salesData = orders.map(order => ({
            date: moment(order.created_at).format('YYYY-MM-DD'),
            total_price: parseFloat(order.total_price_set.shop_money.amount)
        }));

        res.json(salesData);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/sales-growth', async (req, res) => {
    // Implement sales growth logic here
});

router.get('/new-customers', async (req, res) => {
    try {
        const customers = await mongoose.connection.db.collection('shopifyCustomers').find({}).toArray();
        
        // Track new customers over time
        const newCustomersData = customers.map(customer => ({
            date: moment(customer.created_at).format('YYYY-MM-DD')
        }));

        res.json(newCustomersData);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/repeat-customers', async (req, res) => {
    // Implement repeat customers logic here
});

router.get('/geo-distribution', async (req, res) => {
    try {
        const customers = await mongoose.connection.db.collection('shopifyCustomers').find({}).toArray();

        // Geographical distribution of customers
        const geoData = customers.map(customer => ({
            city: customer.default_address.city
        }));

        res.json(geoData);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/customer-lifetime-value', async (req, res) => {
    // Implement customer lifetime value by cohorts logic here
});

module.exports = router;
