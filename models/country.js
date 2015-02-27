var mongoose = require('mongoose');

var countrySchema = mongoose.Schema({
  name : String,
  hasTravelled : {type: Boolean, default: false}
});

var Country = mongoose.model('Country', countrySchema);

module.exports = Country;