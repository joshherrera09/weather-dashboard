// var cities = [
//     'San Diego',
//     'New York',
//     'Chicago',
// ];

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
        
        
        // console.log(cityName);
        // console.log(humidity);
        // console.log(windSpeed);

        $('#current-weather').append(cityName);

        $('#current-weather').append('Temperature: ' + farTemp);
        $('#current-weather').append('Humidity: ' + humidity);
        $('#current-weather').append('Wind Speed: ' + windSpeed);
        

    });
}

displayCityInfo();


// Array to store recent searches
// 
