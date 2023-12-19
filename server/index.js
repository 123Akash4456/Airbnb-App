const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000; // or any port you prefer

// Enable CORS
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/airbnb', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a mongoose schema
const userSchema = new mongoose.Schema({
  fullName: String,
  contactNumber: String,
  email: String,
  password: String,
});

// Create a mongoose model
const User = mongoose.model('User', userSchema);

// Parse JSON bodies for POST requests
app.use(express.json());

// Define your registration route
app.post('/register', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
