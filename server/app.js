const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const router = require('./router');

const logger = (req, res, next) => {
  console.log(`${req.method} request received at ${req.url}`);
  next();
};

const app = express();

app.use(bodyParser.json());
app.use(logger);
app.use(express.static(path.resolve(__dirname, '../dist')));

// Invert control for testing
router(app);

module.exports = app;
