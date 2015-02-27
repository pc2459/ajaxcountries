var countries = require('../models/countries.json');
var _ = require('underscore');

var indexController = {
	index: function(req, res) {
		res.render('index');
	},

  getCountries: function(req, res){
    res.send(countries);
  },

  getSearch: function(req, res){
    var searchValue = req.body.searchValue;
    var results = _.filter(countries, function(country){
      return country.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 ;
    });
    res.send(results);
  },

  markVisited: function(req, res){

    var countryName = req.body.country;

    countries = _.map(countries, function(country){
      if(country.name === countryName){
        country.hasTravelled = true;       
      }
      return country;
    });

    res.send('success');
  }
};

module.exports = indexController;