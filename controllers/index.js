var countries = require('../models/countries.json');
var mongoose = require('mongoose');
var _ = require('underscore');
var Country = require('../models/country.js');

var indexController = {
	index: function(req, res) {
		res.render('index');
	},

  getCountries: function(req, res){
    Country.find({}, function(err, results){
      res.send(results);      
    });
  },

  getSearch: function(req, res){
    var searchValue = req.body.searchValue;
    
    Country.find({}, function(err, results){
      var searchResults = _.filter(results, function(country){
        return country.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 ;
      });
      res.send(searchResults);
    });

  },

  markVisited: function(req, res){
    var countryName = req.body.country;

    Country.findOneAndUpdate({name: countryName}, {hasTravelled : true}, function(err, result){
      res.send('success');
    });
    
  }
};

module.exports = indexController;