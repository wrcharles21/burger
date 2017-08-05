var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req,res){
	buger.all(function(burger_data){
		console.log(burger_data);
		res.render('index');
	})
	
})

module.exports + burger_controller;