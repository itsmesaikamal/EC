// backend/routes/shopifyCustomers.js
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/', async (req, res) => {
    try {
        const data = await mongoose.connection.db.collection('shopifyCustomers').find({}).toArray();
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
