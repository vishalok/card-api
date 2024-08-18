
const express = require('express');
const connectDB = require('./config/db.config');
const cardRoutes = require('./routes/card.route');
require('dotenv').config();
const app = express();
const port = process.env.PORT;

app.use(express.json());

// Import and use routes
app.use('/api', cardRoutes);

// Basic endpoint to check if server is running
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Connect to MongoDB
connectDB();

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
