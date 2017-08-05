var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost'
	user: 'root',
	password: '',
	database: 'burgers_db'
});

connection.connect(function(error) {
	if (error) {
		console.error("cannot connect: " + error.stack);
		return;
	}
	console.log("connected as id" + connection.threadId);
});

module.exports = connection; 