'use strict';

var express = require('express');
var app = express();
var routes = require('./routes.js');

var jsonParser = require('body-parser').json;
var logger = require('morgan');

//app.use() = middleware
app.use(logger('dev'));
app.use(jsonParser());
app.use('/questions', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('The page you were looking for was not found');
  err.status = 404;
  next(err);
});

// Error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500); //undefined or internal server Error
  res.json({
    error: {
      message: err.message
    }
  });
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('The server is now listening on port ' + port + '. Code on!');
});
