var soap      = require('soap'),
    jsontoxml = require('jsontoxml'),
    parser    = require('xml2json'),
    utility   = require('./utility');

var url = 'https://www.printeressentials.com/webservices/services/pe/AvailabilityPrice?wsdl';

function getAvailabilityPrice(partsList, cb) {
  var parts = partsList.reduce(function(parts, part) {
    parts.push({partNumber: part, availability: '', price: '', status: ''});
    return parts;
  }, []);

  var availability = {
    'Availability': {
      'emailAddress': process.env.emailAddress,
      'password': process.env.password,
      'authorization': '',
      'showWarehouseDetail': true,
      'part': parts
    }
  };

  var args = {
    'inputXmlDoc': {
      $xml: jsontoxml.cdata(jsontoxml(availability))
    }
  };

  soap.createClient(url, function(err, client) {
    client.addSoapHeader({ soapAction: "" });

    client.getAvailabilityPrice(args, function(err, results) {
      var parsed = parser.toJson(results.getAvailabilityPriceReturn.$value, { object: true });
      parsed = utility.removeKeys( parsed, ["emailAddress", "password"], true );
      cb(parsed);
    });
  });
}


module.exports.getAvailabilityPrice = getAvailabilityPrice;