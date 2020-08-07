

// 'GET' (city name, date, weather icon, temperature, humidity, windspeed)
function displayCityInfo() {
    // var city = $('.city-search').val();
    var city = 'san diego';
    var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=99adabcd9b9526ae2fc8e7bbc24f5de4';
    

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
    var city = 'san diego';
    var queryURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&appid=99adabcd9b9526ae2fc8e7bbc24f5de4';

    $.ajax({
        url:queryURL,
        method: 'GET'
    }).then(function(response) {
        console.log(response);

        // First day of forecast
        var dayOneTemp = response.list[5].main.temp;        
        var dayOnehumidity = response.list[5].main.humidity;
        var dayOneDate = moment().add(1,'days').format('DD/MM/YYYY');
        var dayOneTemp = response.list[5].main.temp;
        // var iconCode = response.weather[0].icon;
        // var iconUrl = 'http://openweathermap.org/img/w/' + iconCode + '.png';

        $('#dayOneDate').append(dayOneDate);
        // $('#dayOneIcon').attr('src', iconUrl);
        $('#dayOneTemp').append('Temp:' + dayOneTemp);
        $('#dayOneHum').append('Humidity:' + dayOnehumidity + '%');

        // Second day of forecast
        var dayTwoTemp = response.list[12].main.temp;        
        var dayTwoHumidity = response.list[12].main.humidity;
        var dayTwoDate = moment().add(2,'days').format('DD/MM/YYYY');
        var dayTwoTemp = response.list[12].main.temp;
        // var iconCode = response.weather[0].icon;
        // var iconUrl = 'http://openweathermap.org/img/w/' + iconCode + '.png';

        $('#dayTwoDate').append(dayTwoDate);
        // $('#dayOneIcon').attr('src', iconUrl);
        $('#dayTwoTemp').append('Temp:' + dayTwoTemp);
        $('#dayTwoHum').append('Humidity:' + dayTwoHumidity + '%');

        // Third day of forecast
        var dayThreeTemp = response.list[20].main.temp;        
        var dayThreeHumidity = response.list[20].main.humidity;
        var dayThreeDate = moment().add(3,'days').format('DD/MM/YYYY');
        var dayThreeTemp = response.list[20].main.temp;
        // var iconCode = response.weather[0].icon;
        // var iconUrl = 'http://openweathermap.org/img/w/' + iconCode + '.png';

        $('#dayThreeDate').append(dayThreeDate);
        // $('#dayOneIcon').attr('src', iconUrl);
        $('#dayThreeTemp').append('Temp:' + dayThreeTemp);
        $('#dayThreeHum').append('Humidity:' + dayThreeHumidity + '%');

        // Fourth day of forecast
        var dayFourTemp = response.list[28].main.temp;        
        var dayFourHumidity = response.list[28].main.humidity;
        var dayFourDate = moment().add(3,'days').format('DD/MM/YYYY');
        var dayFourTemp = response.list[28].main.temp;
        // var iconCode = response.weather[0].icon;
        // var iconUrl = 'http://openweathermap.org/img/w/' + iconCode + '.png';

        $('#dayFourDate').append(dayFourDate);
        // $('#dayOneIcon').attr('src', iconUrl);
        $('#dayFourTemp').append('Temp:' + dayFourTemp);
        $('#dayFourHum').append('Humidity:' + dayFourHumidity + '%');

        // Fifth day of forecast
        var dayFiveTemp = response.list[36].main.temp;        
        var dayFiveHumidity = response.list[36].main.humidity;
        var dayFiveDate = moment().add(3,'days').format('DD/MM/YYYY');
        var dayFiveTemp = response.list[36].main.temp;
        // var iconCode = response.weather[0].icon;
        // var iconUrl = 'http://openweathermap.org/img/w/' + iconCode + '.png';

        $('#dayFiveDate').append(dayFiveDate);
        // $('#dayOneIcon').attr('src', iconUrl);
        $('#dayFiveTemp').append('Temp:' + dayFiveTemp);
        $('#dayFiveHum').append('Humidity:' + dayFiveHumidity + '%');
        
    })
}

// UV index call


displayCityInfo();
fiveDay();

//TO-DO

// Fix cards(display date, style, display wether icon)
// Finsish styling

// Array to store recent searches
// Funnction to store recent searches to local storage
