/**
 * Sample getting OW2 project
 *
 * Copyright(c) 2013 Christophe Hamerling <christophe.hamerling@gmail.com>
 * MIT Licensed
 */


var app = require('..');

app.start({bamboo : 'http://bamboo.ow2.org', port: 3001}, function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log('Started, check /status/PETALSESB-PETALSESBPARENT');
  }
})
