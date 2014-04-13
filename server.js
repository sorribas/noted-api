var param = require('param');
var crypto = require('crypto');
var seaport = require('seaport');
var app = require('./lib/app');
var getdb = require('./lib/db');
var notebooks = require('./routes/notebooks');
var notes = require('./routes/notes');
var ports = seaport.connect(param('registry.host'), param('registry.port'));

app.get('/api/notebooks', notebooks.list);
app.post('/api/notebooks', notebooks.add);
app.del('/api/notebooks/{id}', notebooks.delete);

app.get('/api/notebooks/{id}', notes.list);
app.put('/api/notes/{id}', notes.update);
app.post('/api/notes', notes.create);
app.del('/api/notes/{id}', notes.delete);

var port = ports.register('api');
app.listen(port);
console.log('NotEd API server listening on port ' + port);
