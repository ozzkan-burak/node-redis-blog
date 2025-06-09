const express = require('express');
const expressHandlebars = require('express-handlebars');
//const bodyParser = require('body-parser');
//const cors = require('cors');
require('dotenv').config({ path: './config/.env' });

const app = express();
require('./config/db')(); // Assuming db.js is in the config folder

const hbs = expressHandlebars.create({
  // ...diğer ayarlar...
  helpers: {
    section: function (name, options) {
      if (!this._sections) this._sections = {};
      this._sections[name] = options.fn(this);
      return null;
    },
  },
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static('public')); // Serve static files from the 'public' directory
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
