var about_data = require('../homepage_data.json');

exports.renderHome = function(req, res){
	res.render('index_projv2');
}

exports.renderAbout = function(req, res){
  	res.render('about', about_data);
}

exports.renderFeatTrips = function(req, res){
	res.render('featured_trips');
}

exports.renderContact = function(req, res){
	res.render('contact');
}