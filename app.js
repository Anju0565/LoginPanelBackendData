require("dotenv").config();
const express = require('express');
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db');
const cors = require("cors");

// Create an Express application
const app = express();

// Middleware
app.use(express.json());

app.use(cors());

app.use(express.urlencoded({ extended: true }));

// Define additional middleware as needed

// Define routes
app.use('/auth', require('./routes/authRoutes'));
app.use('/user', require('./routes/userRoutes'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Server Error');
});

app.get("/", async (req, res) => {
    res.status(200).send("Home Page");
  });

app.listen(PORT, async() => {
    await connectDB()
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
