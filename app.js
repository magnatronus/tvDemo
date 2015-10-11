/**
 * This is the main Node app.js
 * This is the first file that is run when the server starts
 *
 * developed by Steve Rogers (@sarmcon)
 * Oct 2015
 */

var express = require('express'),
	app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


// set up our static file route
app.use(express.static(__dirname + '/public'));

// set up our routes
app.use(require('./routers/tvml'))

// Start our Server
var server = app.listen(9001, function () {
  console.log('Node tvOS sample app now listening on port: %s', server.address().port);
});
