require('dotenv').config({ path: `${__dirname}/.env` });

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const app = express();

//  These have to be first in order for the routes to work!

app.use(cors());
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json()); // for parsing application/json in responses
app.use(express.urlencoded({ extended: true }));

// ROUTES
const indexRouter = require('./routes/routes');

// login and register routes
app.use('/auth', require('./routes/authRoute'));

// Dash route
app.use('/dashboard', require('./routes/dashboard'));

// Other routes
app.use('/', indexRouter);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  // set locals, only provides an error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(500).json({
    message: err.message,
    error: err,
  });
});

module.exports = app;
