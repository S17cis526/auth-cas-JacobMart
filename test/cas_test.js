var http = require('http');
var assert = require('assert');
var authCAS = require('../lib/auth-cas');
var config = require('./config.json');

it('A host must be specified', function(){
  assert.throws(
    () => {
      new authCAS();
    }, "Host must be supplied"
  );
  assert.throws( ()=> {
    new authCAS(undefined);
  }, "Host must be supplied"
);
});

it('A CAS host must be specified', function(){
  assert.throws(
    () => { new authCAS('https://cashost.com')},
    /A CAS host must be specified/
  )
});


it('visiting the login page should redirect to the CAS server login page', function(done){
  http.get(config.host + '/login', function(res){
    assert.equals(res.statusCode, 302);
    var location = url.parse(res.headers.location);
    var service = encodeURIComponent(config.host + '/login');
    assert.equals(location.protocol, url.parse(config.casHost).protocol);
    assert.equals(location.port, )
  })
});
