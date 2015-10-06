var path = require('path');
/**
 * All routes for backend
 * @param  {Object} app     Instance object of Express middleware
 * @param  {Object} express The Express library
 * @return {void}
 */
var routes = function(app, express) {
  var router = require('./rest')(app, express.Router());

  app.use('', router);
};

module.exports = routes;