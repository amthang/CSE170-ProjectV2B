var about_data = require('../homepage_data.json');
var more_feat = require('../more_feat.json');
var boston = require('../version2_json/travel_diary_boston.json');
var hk = require('../version2_json/travel_diary_hk.json');
var sf = require('../version2_json/travel_diary_sf.json');
var disney = require('../version2_json/travel_diary_disney.json');
var user_data = require('../version2_json/user_data.json');
var sd = require('../version2_json/diary_entry_sd.json');
var paris = require('../version2_json/diary_entry_paris.json');
var ucsd = require('../version2_json/diary_entry_ucsd.json');
var travel_diary_wine = require('../travel_diary_wine.json');
var travel_diary_brittany = require('../travel_diary_brittany.json');
var future_travel_diaries = require('../version2_json/future_travel_diaries.json');

exports.renderHome = function(req, res){
	res.render('index_projv2');
}

exports.renderAbout = function(req, res){
  	res.render('about', about_data);
}

exports.renderFeatTrips = function(req, res){
	res.render('featured_trips', about_data);
}

exports.renderContact = function(req, res){
	res.render('contact');
}

exports.renderMoreFeat = function(req, res){
	res.render('search_results', more_feat);
}

exports.renderHK = function(req, res){
	res.render('travel_diary', hk);
}

exports.renderDisney = function(req, res){
	res.render('travel_diary', disney);
}

exports.renderBoston = function(req, res){
	res.render('travel_diary', boston);
}

exports.renderSF = function(req, res){
	res.render('travel_diary', sf);
}

exports.renderUserProfile = function(req, res){
	res.render('user_profile', user_data);
}

exports.renderAddTrip = function(req, res){
	res.render('add_tripdiary');
}

exports.addTripToPage = function(req, res){
	var title = req.body.trip_title;
	var description = req.body.trip_description;
	var date = req.body.trip_date;
	//var img = req.body.trip_img;
	var length = user_data.length;
	var flag = "";

	var trip_info = {
		"circle_position" : "fa fa-circle",
		"head" : title,
		"img" : "img/user/seuss.jpg",
		"description" : description,
		"date" : date,
	}

	user_data["profile_data"].unshift(trip_info);
	res.render('user_profile', user_data);
}

exports.renderSD = function(req, res){
	res.render('user_see_diary', sd);
}

exports.renderParis = function(req, res){
	res.render('user_see_diary', paris);
}

exports.renderUCSD = function(req, res){
	res.render('user_see_diary', ucsd);
}

exports.renderUserContact = function(req, res){
	res.render('user_contact');
}

exports.renderSD_user = function(req, res){
	res.render('user_see_profile_diary', sd);
}

exports.renderParis_user = function(req, res){
	res.render('user_see_profile_diary', paris);
}

exports.renderUCSD_user = function(req, res){
	res.render('user_see_profile_diary', ucsd);
}

exports.renderDiaryWine = function(req, res){
	res.render('travel_diary_signedin', travel_diary_wine);
}

exports.renderDiaryBrit = function(req, res){
	res.render('travel_diary_signedin', travel_diary_brittany);
}

exports.renderFutureTravels = function(req, res){
	res.render('future_travels', future_travel_diaries);
}