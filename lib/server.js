'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const router = require('../router');

// cross origin resource sharing with Cors
app.use(cors());
// log all requests in your system with morgan (similar to logger function)
app.use(morgan('dev'));

app.use ('/api', router);

module.exports = {
  app,
  start: (port) => {
    app.listen()
  })
}
app.listen(3000, () => console.log('server up'));
