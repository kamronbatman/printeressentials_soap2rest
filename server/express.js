var express       = require('express'),
    morgan        = require('morgan'),
    bodyParser    = require('body-parser'),
    http          = require('http'),
    utility       = require('./utility');

// initialize express
var app = express();
var server = http.Server(app);

// Dev logging
if (process.isDev()) {
  app.use(morgan('dev'));
}

// JSON support for body parsing
app.use(bodyParser.json());

// Body parser
app.use(bodyParser.urlencoded({
  extended: true
}));

// Initialize the routes
require('./routes')(app, express);

if (process.isDev()) {
  server.listen(process.env.portDev);
} else {
  server.listen(process.env.port);
}

// Export Express
module.exports = app;