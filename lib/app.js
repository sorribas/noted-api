var root = require('root');
var fs = require('fs');
var session = require('noted-session');
var app = root();

var templates = {};

app.use('response.session', session.set);
app.use('request.session', session.get);

app.use('request.userId', function() {
  return this.session('user');
});

module.exports = app;
