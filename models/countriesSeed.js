var Country = require('./country.js');
var countries = require('./countries.json');
var _ = require('underscore');

Country.find({}, function(err, result){
  if(result.length === 0){

    _.each(countries, function(country){
      var newCountry = new Country({
        name : country.name
      });
      newCountry.save();
    });

  }
});