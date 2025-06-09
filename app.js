const express = require('express');
const engine = require('express-handlebars').engine;
//const bodyParser = require('body-parser');
//const cors = require('cors');
require('dotenv').config({ path: './config/.env' });

const app = express();
require('./config/db')(); // Assuming db.js is in the config folder
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

const port = process.env.PORT || 3001;

// Middleware
//app.use(cors());
//app.use(bodyParser.json());

// Routes
app.use(require('./routes/index'));
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
