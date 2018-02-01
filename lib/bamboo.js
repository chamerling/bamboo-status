/**
 *
 * Copyright(c) 2013 Christophe Hamerling <christophe.hamerling@gmail.com>
 * MIT Licensed
 */

var express = require('express')
  , request = require('request')
  , fs = require('fs')
  , bodyParser = require('body-parser')

exports.start = function(options, callback) {
  options = options || {};
  if (!options.bamboo) {
    return callback(new Error('bamboo option is required'));
  }
  
  var port = process.env.PORT || options.port || 3000;
  var bamboo = options.bamboo + '/rest/api/latest/';

  var app = express();
  app.use(bodyParser.urlencoded({ extended: false }));
  
  app.get('/', function(req, res){
    res.send(200, {bamboo : bamboo});
  });

  app.get('/status/:plan', function(req, res) {
    request({
      url: bamboo + 'result/' + req.params.plan + '/latest.json',
      json: true,
    }, function(err, response, body) {
      var img = 'unknown';
      var headers = {'Content-Type': 'image/svg+xml'};

      if (err) {
        headers.OW2Status = 'Error ' + err.msg;
      } else if (response.statusCode === 200) {  
        headers.OW2Status = 'Status OK';
        if (body.state === 'Successful') {
          img = 'passing'
        } else if (body.state === 'Failed') {
          img = 'failing'
        } else {
          headers.OW2Status = 'Unsupported state ' + body.state;
        }
      } else {
        headers.OW2Status = 'Unknown status code ' + response.statusCode;
      }
      
      res.writeHead(200, headers);
      var fileStream = fs.createReadStream(__dirname + '/../public/images/' + img + '.svg');
      fileStream.pipe(res);
    });
  });

  app.listen(port, function(err) {
    if (err) {
      console.log('Error', err);
    } else {
    	console.log('Started on http://localhost:' + port);      
    }
    if (callback) callback(err);
  });
}