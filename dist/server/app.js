/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var config = require('./config/environment');
// Setup server
var app = express();
var server = require('http').createServer(app);
require('./config/express')(app);
require('./routes')(app);

// Start server
server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;


var api_key = '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'

var sendgrid  = require('sendgrid')(api_key);

app.post("/email", function(req, res) {
  
  console.log('backend was reached');
  var payload = {
    to: 'alikfitz@gmail.com',
    from: req.body.from,
    subject: req.body.subject,
    text: req.body.text,
    html: req.body.html
  };

  sendgrid.send(payload, function(err, json) {
  if (err) { console.error(err); }
  console.log(json);
});

  // Send to sendgrid

});




