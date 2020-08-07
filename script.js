

// 'GET' (city name, date, weather icon, temperature, humidity, windspeed)
function displayCityInfo() {
    // var city = $('.city-search').val();
    var city = 'san diego';
    var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=99adabcd9b9526ae2fc8e7bbc24f5de4';
    

    $.ajax({
        url:queryURL,
        method: 'GET'
    }).then(function(response) {
        // console.log(queryURL);
        // console.log(response);
        var farTemp = response.main.temp
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
    var queryURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&appid=99adabcd9b9526ae2fc8e7bbc24f5de4';

    $.ajax({
        url:queryURL,
        method: 'GET'
    }).then(function(response) {
        console.log(response);

        // First day of forecast
        var dayOneTemp = response.list[5].main.temp;
        console.log(dayOneTemp);
        var humidity = response.list[5].main.humidity;
        console.log(humidity);
        var date = moment().add(1,'days').format('DD/MM/YYYY');
        console.log(date);
        var temp = response.list[5].main.temp;
        console.log(temp);

        $('#dayOneDate').append(date);
        $('#dayOneTemp').append('Temp:' + dayOneTemp);
        $('#dayOneHum').append('Humidity:' + humidity + '%');
        
    })
}


displayCityInfo();
fiveDay();



// Array to store recent searches

// 5 day forecast url for San Diego https://api.openweathermap.org/data/2.5/onecall?lat=32.72&lon=-117.16&%20exclude=minutely,hourly&appid=99adabcd9b9526ae2fc8e7bbc24f5de4
// 5 day forecast url for any city https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={YOUR API KEY}