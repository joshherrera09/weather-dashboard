var city = 'San Diego';
var citySearches = [];

// 'GET' (city name, date, weather icon, temperature, humidity, windspeed)
function displayCityInfo() {
    

    // var city = 'san diego';
    var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=99adabcd9b9526ae2fc8e7bbc24f5de4';

    $('#city-date').empty();
    $('#wicon').attr('src', '');
    $('#temp').empty();
    $('#humidity').empty();
    $('#windspeed').empty();

    $.ajax({
        url:queryURL,
        method: 'GET'
    }).then(function(response) {
        var farTemp = response.main.temp
        var cityName = response.name;
        var humidity = response.main.humidity;
        var windSpeed = response.wind.speed;
        var iconCode = response.weather[0].icon;
        var iconUrl = 'http://openweathermap.org/img/w/' + iconCode + '.png';

        $('#city-date').append(cityName + ' ');
        $('#city-date').append(moment().format('[(]M/D/YYYY[)]'));
        $('#wicon').attr('src', iconUrl);
        $('#temp').append('Temperature: ' + farTemp);
        $('#humidity').append('Humidity: ' + humidity);
        $('#windspeed').append('Wind Speed: ' + windSpeed + ' MPH');


    });
}
// Funciton to fill the five day forecast
function fiveDay () {
    
    var queryURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&appid=99adabcd9b9526ae2fc8e7bbc24f5de4';

    $.ajax({
        url:queryURL,
        method: 'GET'
    }).then(function(response) {
        console.log(response);


        var list = response.list;
        var date;
        var iconUrl = 'http://openweathermap.org/img/w/';
        var iconImage;
        var temp;
        var humidity;
        var card;
        var fiveDayContainer = $('#fiveDay');
        var dayForecast;
        fiveDayContainer.empty();

        for (let i = 0; i < list.length;) {
           
            dayForecast = list[i];
            date = moment(dayForecast.dt_txt).format('MM/DD/YYYY');
            iconImage = dayForecast.weather[0].icon + '.png';
            temp = dayForecast.main.temp;
            humidity = dayForecast.main.humidity;
            card = `<div class='col' class='cardContainer'>
                        <div class='card'>
                            <h6 class='cardDate'>${date}</h6>
                            <img class='icon' src='${iconUrl}${iconImage}' alt='Weather Icon'>
                            <p class='temp'>Temp: ${temp}&deg;F</p>
                            <p class='hum'>Humidity: ${humidity}</p>
                        </div>
                    </div>`;

            fiveDayContainer.append(card);

           i = i + 8;
            
        }

        
    })
}

// UV index call

function init() {
    // read list of city searches from local storage
    // and store values in citySearch []
    // call 
    $('#searchButton').on('click', function(){
        
        event.preventDefault();
        city = $('#citySearch').val();
        displayCityInfo();
        fiveDay();
    })
}

function renderSearchList() {
    var listLength = (citySearch.length > 10) ? 10 : citySearch.length;
    // Empty content of past city searches list
    // Do a for-loop to iterate through citySearch[]
    // and render the list of past city searches
    // NOTE: limit the for-loop to no more than 10 cities
    for (var i = 0; i < listLength; i++) {
       // Render city
    }
  }
  function init() {
      // read list of city searches from local storage
      // and store values in citySearch []
     // call renderSearchList()
      $('#searchButton').on('click', function(){
          event.preventDefault();
          city = $('#citySearch').val();
          displayCityInfo();
          fiveDay();
          // Add new city to citySearch[] via push()
          // Save to localStorage
          // Call renderSearchList() again
      })
  }

// citySearch storage function
    // Push city to citySearch []
    // set to local storage
    // append to recent searches (for loop)
        // iterate through citySearch array
        // Limit to 10

init();
displayCityInfo();
fiveDay();

//TO-DO

// Style icon in forecast
// Fix cards(display date, style, display wether icon)
// Finsish styling icons in cards


