var url   =  require('url');
    soap  =  require('./soap');

module.exports = function(app, router) {

  function postAvailabilityPrice(req, res, next) {
    if (Array.isArray(req.body.parts)) {
      soap.getAvailabilityPrice(req.body.parts, function(parsed) {
        res.json(parsed);
      });
    } else {
      res.json({ error: 'Invalid request' });
    }
  }

  router.post('/availabilityprice', postAvailabilityPrice);

  return router;
};