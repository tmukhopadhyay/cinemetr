var compression = require('compression');
var express = require('express');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(compression());
app.use(express.static(__dirname + '/dist', { maxAge: 8640000000000 }));

app.get('/', function(request, response) {
    response.sendFile('./dist/index.html');
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
