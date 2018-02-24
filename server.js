const express = require('express');
const bodyParser = require('body-parser');

const logger = (req, res, next) => {
  console.log(`${req.method} request received at ${req.url}`);
  next();
};

const app = express();

app.use(bodyParser.json());
app.use(logger);
app.use(express.static(`${__dirname}/dist`));

// Basic routes

app.get('/api/user', (req, res) => {
  res.sendStatus(200);
});

const port = process.env.port || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));