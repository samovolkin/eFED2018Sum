function ForecastData(data) {
    this.temperatures = getTemperatures(data);
    this.formattedTemperatures = this.temperatures.map((forecastInfo) => `${forecastInfo.temp_max^0}° ${forecastInfo.temp_min^0}°`);
    this.dayNames = getDayNames(5);
    this.today = getTodayForecastData(data);
    this.windSpeedValues = this.today.map((item) => `${Math.round(item.wind.speed)} m/s`);
    this.windDegrees = this.today.map((item) => item.wind.deg);
    this.todayRain = `${extract(this.today, 'rain').reduce((sum, current) => sum+current).toFixed(2)} mm`;
    this.icons = extract(this.today, 'icon').slice(0,5).map(function (x) { return {src: `http://openweathermap.org/img/w/${x}.png`};});
}


function getTemperatures(data) {
    //console.log(data);
    var temperaturesEveryThreeHours = data.list.map(function(item) {
        return {
            temp_min: item.main.temp_min, 
            temp_max: item.main.temp_max,
            //date: item.dt_txt
        };
    });

    var averageTemperatures = [];
    for (var i = 0; i < temperaturesEveryThreeHours.length; i+=8) {
        var neededValues = temperaturesEveryThreeHours.slice(i, i+8).reduce(function(previous, current) {
            previous.temp_max = (previous.temp_max > current.temp_max)? previous.temp_max : current.temp_max;
            previous.temp_min = (previous.temp_min < current.temp_min)? previous.temp_min : current.temp_min;
            return previous;
        });
        averageTemperatures.push(neededValues);
    }
    //console.log(averageTemperatures);
    return averageTemperatures;
}

function getDayNames(size) {
    var todayDayNumber = (new Date()).getDay();
    return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].slice(todayDayNumber, todayDayNumber + size);
}

function getTodayForecastData(data) {
    var list = data.list.slice(0, 8);
    var buffer = [];
    for(var item of list) {
        buffer.push({
            temp: item.main.temp,
            wind: item.wind,
            rain: ('rain' in item && '3h' in item.rain)? item.rain['3h'] : 0,
            time: item.dt_txt.slice(11, 16),
            icon: item.weather[0].icon
        });
    }
    return buffer;
}