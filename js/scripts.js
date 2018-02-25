var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
  var countryName = $('#country-name').val();
  if(!countryName.length) countryName = 'Poland';
  $.getJSON(url + countryName, getCountry);
}

function getCountry(input) {
  countriesList.empty();
  input.forEach(function(item) {
    var table = $('<table>').addClass('country').appendTo(countriesList);
    var trace = $('<tr>').addClass('main').appendTo(table);
    var flag = $('<td>').addClass('flag').appendTo(trace);
    var countryCode = item.alpha2Code.toLowerCase();
    $('<img>').attr('src', 'http://www.geonames.org/flags/x/' + countryCode + '.gif' ).appendTo(flag);
    $('<td>').text(item.name).addClass('name').appendTo(trace);
			
    $('<tr>').appendTo(table);
    $('<td colspan="2">').text('Background information').addClass('border').appendTo(table);
			
    var trace = $('<tr>').addClass('countryTrace').appendTo(table);
    $('<td>').text('area').appendTo(trace);
    $('<td>').text(item.area).appendTo(trace);
			
    var trace = $('<tr>').addClass('countryTrace').appendTo(table);
    $('<td>').text('capital').appendTo(trace);
    $('<td>').text(item.capital).appendTo(trace);
			
    var trace = $('<tr>').addClass('countryTrace').appendTo(table);
    $('<td>').text('population').appendTo(trace);
    $('<td>').text(item.population).appendTo(trace);
			
    var trace = $('<tr>').addClass('countryTrace').appendTo(table);
    $('<td>').text('language(s)').appendTo(trace);
    $('<td>').text(item.languages).appendTo(trace);
			
    var trace = $('<tr>').addClass('countryTrace').appendTo(table);
    $('<td>').text('currency').appendTo(trace);
    $('<td>').text(item.currencies).appendTo(trace);
			
    $('<tr>').appendTo(table);
    $('<td colspan="2">').addClass('border').appendTo(table);
  });
}