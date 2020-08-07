

// 'GET' (city name, date, weather icon, temperature, humidity, windspeed)
function displayCityInfo() {
    // var city = $('.city-search').val();
    var city = 'san diego';
    var queryURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=99adabcd9b9526ae2fc8e7bbc24f5de4';
    

    $.ajax({
        url:queryURL,
        method: 'GET'
    }).then(function(response) {
        // console.log(queryURL);
        // console.log(response);
        var farTemp = (response.main.temp - 273.15) * 1.80 +32;
        // console.log(farTemp);
        var cityName = response.name;
        var humidity = response.main.humidity;
        var windSpeed = response.wind.speed;
        var iconCode = response.weather[0].icon;
        var iconUrl = 'http://openweathermap.org/img/w/' + iconCode + '.png'

        // console.log(cityName);
        // console.log(humidity);
        // console.log(windSpeed);

        $('#city-date').append(cityName + ' ');
        $('#city-date').append(moment().format('[(]M/D/YYYY[)]'));
        $('#wicon').attr('src', iconUrl);

        $('#temp').append('Temperature: ' + farTemp);
        $('#humidity').append('Humidity: ' + humidity);
        $('#windspeed').append('Wind Speed: ' + windSpeed + ' MPH');


        

    });
}

function fiveDay () {
    var city = 'san diego';
    var queryURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=32.72&lon=-117.16&%20exclude=minutely,hourly&appid=99adabcd9b9526ae2fc8e7bbc24f5de4';

    $.ajax({
        url:queryURL;
        method:'GET'
    }).then(function(response) {

        
        
    })
}


displayCityInfo();



// Array to store recent searches

// 5 day forecast url for San Diego https://api.openweathermap.org/data/2.5/onecall?lat=32.72&lon=-117.16&%20exclude=minutely,hourly&appid=99adabcd9b9526ae2fc8e7bbc24f5de4
// 5 day forecast url for any city https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={YOUR API KEY}