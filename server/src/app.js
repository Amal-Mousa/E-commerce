const express = require('express');
const { router } = require('./routes');
const { errorHandler } = require('./middleware');

const app = express();
require('dotenv').config();

app.set('port', process.env.PORT || 5000);

app.use([
  express.json(),
  express.urlencoded({ extended: false }),
  errorHandler,
]);

app.disable('x-powered-by');
app.use('/api', router);

module.exports = { app };
