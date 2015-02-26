$(document).on('ready',function(){

  console.log('Test');

  $('#btn-countries').on('click',function(){
    $.get('/countries', function(data){

      var countryEls = _.map(data, function(country){
        return '<li>' + country.name + '</li>';
      });

      var countryUl = $('<ul>');
      countryUl.append(countryEls);

      $('#countries').empty();
      $('#countries').append(countryUl);
    });
  });

  $('#form-search').on('submit', function(e){

    e.preventDefault();

    var searchval = {searchValue : $('#input-search').val()};
    
    console.log(searchval);

    $.post('/search', searchval, function(data){

      var countryEls = _.map(data, function(country){
        return '<li>' + country.name + '</li>';
      });
      var countryUl = $('<ul>');
      countryUl.append(countryEls);

      $('#search-results').empty();
      $('#search-results').append(countryUl);

    });
  });

});

