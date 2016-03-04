var results = require('../search_results.json');
var paris_rsult = require('../paris.json');
var sd_rsult = require('../sd.json');
var hogwarts_rsult = require('../hogwarts.json');
var data = require('../error_msg.json');


exports.main = function(req, res){
	res.render('search_results', results);
};

exports.checkSearch = function(req, res){
	if(req != null) {
		var city = req.body.city;
		var flag = false;
		var sd_flag = false;
		var paris_flag = false;
		var hogwarts_flag = false;


		// for(var i = 0; i < results["search_results"].length; i++) {
		// 	if(results["search_results"][i].city == city) {
		// 		flag = true;
		// 	}
		// }

		// if(flag) {
		// 	//results["search_results"].push(city_result);
		// 	res.render('search_results', {'city' : city, 'places' : results});
		// }
		// else {
		// 	res.render('index_proj');
		// }

		if(results["search_results"][0].city == city || city == "Paris"){
			res.render('search_results', paris_rsult);
		}

		else if (results["search_results"][1].city == city || city == "San Diego") {
			res.render('search_results', sd_rsult);
		}

		else if (results["search_results"][2].city == city || city == "Hogwarts") {
			res.render('search_results', hogwarts_rsult);
		}

		else
		{
			res.render('index_projv2', data);
		}
	}
}
