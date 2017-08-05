var express = require('express');
var method = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

var app = express();
app.use(express.static('__direname' + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}))

app.use(method('__method'));
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/',burgers_controller);

var port = 3000;
app.listen(port);