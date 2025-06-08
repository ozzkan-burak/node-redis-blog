const express = require('express');
//const bodyParser = require('body-parser');
//const cors = require('cors');
require('dotenv').config({ path: './config/.env' });
const app = express();
const port = process.env.PORT || 3001;

// Middleware
//app.use(cors());
//app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
