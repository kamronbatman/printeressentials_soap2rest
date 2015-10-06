process.isDev = function () { return process.env.NODE_ENV !== 'production'; };
process.isProd = function () { return process.env.NODE_ENV === 'production'; };

process.verb = function () {
  if ( process.isDev() ) { console.log.apply( this, arguments ); }
};

require('dotenv').load();

console.log('Express server listening on port 8000');
module.exports = app = require('./express');