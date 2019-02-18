const express = require('express'),
	path = require('path'),
	router = express.Router(),
	apiRoutes = require('./../routing/apiRoutes.js');

// HTML Routes
router.get('/home', function(req, res){
	res.sendFile(path.join(__dirname, '/../public/home.html'));
});

router.get('/survey', function(req, res){
	res.sendFile(path.join(__dirname, '/../public/survey.html'));
});

router.get('*', function (req, res) {
	res.sendFile(path.join(__dirname, '/../public/home.html'));
});

module.exports = router;