# Bamboo Status

Get your Bamboo build status as images like in [travis-ci](http://travis-ci.org).

## Install, Configure & Run

    git clone XXX
    npm install

You can configure the status server to fit your needs with the options input like:

    var status = require('bamboo-status');
    var options = {bamboo: http://bamboo.ow2.org, port: 3001};
    
    status.start(options, function(err) {
      console.log('...');
    });

Possible options are:

- bamboo: The bamboo URL. The status server will deduce the REST API endpoint from the provided value
- port: The port to start the server on. If you defined the PORT system env (useful for heroku), it ill use system env first

## Deploy

You can easily deploy the application on Cloud provider such as Heroku, RTFM!

## Use

Once running/deployed, you can get a Bamboo plan status image by passing the required information in the URL like:

http://HOST:PORT/status/[PLAN]/

## Refs

- https://developer.atlassian.com/display/BAMBOODEV/Using+the+Bamboo+REST+APIs
- http://bamboo.ow2.org/rest/api/latest/result/PLAY-PARENT.json
- http://bamboo.ow2.org/rest/api/latest/result/PLAY-PARENT/latest
- https://developer.atlassian.com/display/BAMBOODEV/Bamboo+REST+Resources#BambooRESTResources-ProjectService