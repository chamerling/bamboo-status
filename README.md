# Bamboo Status

Get your Bamboo build status as images like in [travis-ci](http://travis-ci.org).

## Install, Configure & Run

*bamboo-status* is available in the NPM registry at ([https://npmjs.org/package/bamboo-status](https://npmjs.org/package/bamboo-status)).

Once downloaded, you can create a status server and configure it to fit your needs with the options input like:

    var status = require('bamboo-status');
    var options = {bamboo: http://bamboo.ow2.org, port: 3001};
    
    status.start(options, function(err) {
      console.log('...');
    });

Possible options are:

- bamboo: The bamboo URL. The status server will deduce the REST API endpoint from the provided value
- port: The port to start the server on. If you defined the PORT system env (useful for Heroku), it ill use system env first

## Deploy

You can easily deploy the application on Cloud provider such as Heroku:

    heroku login
    heroku create
    git push heroku master
    ...
    heroku open

## Use

Once running/deployed, you can get a Bamboo plan status image by passing the required information in the URL like:

    http://HOST:PORT/status/[PLAN_NAME]

A running instance is available of OW2.org projects at http://ow2bamboostatus.herokuapp.com. The source code of the application is available at https://github.com/ow2/ow2-build-status.

Check the Travis-ci documentation on how to insert images in your README files at http://about.travis-ci.org/docs/user/status-images/.

## Sample

Display image status for OW2 plan *PETALSESB-PETALSESBCLTJMX* in a Github README.md file

    [![Build Status](http://ow2bamboostatus.herokuapp.com/status/PETALSESB-PETALSESBCLTJMX)](http://ow2bamboostatus.herokuapp.com/status/PETALSESB-PETALSESBCLTJMX])

[![Build Status](http://ow2bamboostatus.herokuapp.com/status/PETALSESB-PETALSESBCLTJMX)](http://ow2bamboostatus.herokuapp.com/status/PETALSESB-PETALSESBCLTJMX])