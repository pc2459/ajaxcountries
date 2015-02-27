$(document).on('ready',function(){

  console.log('Test');

  $('#btn-countries').on('click',function(){
    $.get('/countries', function(data){
      
      var countryEls = _.map(data, function(country){
        var visited = country.hasTravelled ? 
        '<span class="fa fa-check-circle"> </span>' :
        '<a href="/markvisited" class="mark"><span class="fa fa-times-circle"> </span></a>' ;
        return '<li class="country" data-id="' + country.name + '">' + visited + country.name + '</li>';
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

  $('body').on('click','.mark', function(e){

    e.preventDefault();
    
    var country = $(this).closest('.country').attr('data-id');
    console.log(country);

    $.post('/markvisited', {country: country}, function(data){
      $('[data-id="'+ country +'"]')
        .find('span')
        .removeClass('fa-times-circle')
        .addClass('fa-check-circle');
    });
  });



});

