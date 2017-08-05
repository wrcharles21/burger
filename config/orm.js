var connection = require('./connection.js');

var orm = {
	all: function(tableInput, cd){
		connection.Query('SELECT * FROM' + tableInput+';', function(err,result){
			if(err) throw err;
			cb(result)
		})
	}
}