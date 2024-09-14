// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000; // or any port you prefer

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/some', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Define schema and model
const fundSchema = new mongoose.Schema({
  profileName: String,
  email: String,
  category: String,
  projectTitle: String,
  projectDescription: String,
  fundingAmount: Number,
  additionalInfo: String
});

const Fund = mongoose.model('Fund', fundSchema);

// API route to handle form submission
app.post('/submit-fund', async (req, res) => {
  try {
    const fund = new Fund(req.body);
    await fund.save();
    res.status(201).json({ message: 'Form data saved successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save form data' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
