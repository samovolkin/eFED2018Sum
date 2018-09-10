const APPID_KEY = 'e33262cd6a432b1c3dc5181a736dbc41';

var searchInput = document.getElementById('search-input');
searchInput.onkeydown = function (event) {
    if (event.keyCode != 13) return;

    var searchRequest = searchInput.value;
    console.log(searchRequest);
    var query = (/^zip\:\d+$/.test(searchRequest))? `zip=${searchRequest.slice(4)}` : `q=${searchRequest}`;
    searchInput.value = '';
    getWeatherData(`http://api.openweathermap.org/data/2.5/weather?${query}&units=metric&APPID=${APPID_KEY}`, transformTodayData);
    getWeatherData(`http://api.openweathermap.org/data/2.5/forecast?${query}&units=metric&APPID=${APPID_KEY}`, transformForecastData);
};

function transformTodayData(data) {
    //console.log(data);
    var bTodayDataObject = new TodayData(data);
    //console.log(bTodayDataObject);
    render({
        '.basic-weather': {
            '.basic-weather__town-name': bTodayDataObject.townName,
            '.basic-weather__day-name': bTodayDataObject.dayName,
            '.basic-weather__weather-type':  bTodayDataObject.weatherType,
            '.basic-weather__temperature': bTodayDataObject.temperature
        },
        '.additional-data__humidity': {
            '.value-label': bTodayDataObject.humidity
        },
        '.additional-data__wind': {
            '.value-label': bTodayDataObject.wind
        }
    });
}

function transformForecastData(data) {
    //console.log(data);
    var forecastData = new ForecastData(data);
    console.log(forecastData);
    
    render({
        '.forecast': {
            '.forecast-item__temperature': forecastData.formattedTemperatures,
            '.forecast-item__day-name': forecastData.dayNames
        },
        '.additional-data__rain': {
            '.value-label': forecastData.todayRain
        },
        '.rain-graphic': {
            '.column': extract(forecastData.today, {height: ['rain', (x) => `${x*2}%`]}),
            '.column__label': extract(forecastData.today, {textContent: ['rain', (x) => `${x.toFixed(2)} mm`]}) 
        },
        '.temperature-graphic': {
            '.column': extract(forecastData.today, {height: ['temp', (x) => `${x*2.4}%`]}),
            '.column__label': extract(forecastData.today, {textContent: ['temp', (x) => `${x^0}°`]})
        },
        '.wind-graphic': {
            '.wind-info__value': forecastData.windSpeedValues,
            '.wind-info__arrow': forecastData.windDegrees.map(function(x) { return {transform: `rotate(${x+90}deg)`};}), //what is wrong with (x) => {transform: `rotate(${x}deg)`}
        },
        '.graphics-timetable': {
            '.graphics-timetable__time': extract(forecastData.today, 'time')
        }
    });
}

createTabberElement('tabber', '.tabber__button', '.graphic', 'tabber-none', 'tabber__button--selected');