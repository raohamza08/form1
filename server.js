// server.js
require('dotenv').config({ path: '.env.local' });
const express = require('express');
const path = require('path');
const app = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'src')));

// Password check endpoint
const checkPassword = require('./src/api/check-password');
app.post('/api/check-password', checkPassword);

// Serve index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});