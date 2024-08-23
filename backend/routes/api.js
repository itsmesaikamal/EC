// routes/api.js
const express = require('express');
const router = express.Router();

// Sample data for sales over time
const salesOverTimeData = [
  { date: '2024-01-01', sales: 100 },
  { date: '2024-01-02', sales: 150 },
  // Add more sample data as needed
];

// Endpoint for sales over time
router.get('/sales-over-time', (req, res) => {
  res.json(salesOverTimeData);
  res.json("Hello World");
});

module.exports = router;
