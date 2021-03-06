/** server.js
 * Server for a CAS client
 */

// Constants
const PORT = 3040;

// Requires
var fs = require('fs');
var https = require('https');
var express = require('express');
var config = require('./config.json');

// The Express app
var app = express();

//the webserver
/*var options = {
//can only do if made a certificate with openssl
     key: fs.readFileSync('server.key'),
     cert: fs.readFileSync('server.cert')
}*/
var server = https.createServer(options, app);

// Serve files from public folder
app.use(express.static('public'));

//set up authentication
var AuthCAS = require('auth-cas');
var auth = new AuthCAS(config.host, config.casHost);

// Start the server
app.listen(PORT, function(){
  console.log(PORT);
});
