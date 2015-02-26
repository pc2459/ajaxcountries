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
  }
};

module.exports = indexController;