/*this.window.onload = function() {
window.document.getElementById("mainInfo").innerHTML = JSON.stringify(
  weekForecastMock
);
};*/
const APPID_KEY = 'e33262cd6a432b1c3dc5181a736dbc41';

var searchInput = document.getElementById('search-input');
searchInput.onkeydown = function (event) {
    if (event.keyCode != 13) return;

    var searchRequest = searchInput.value; // NEED ZIP SEARCH POWERED BY REGEXP
    console.log(searchRequest);
    var query = (/^zip\:\d+$/.test(searchRequest))? `zip=${searchRequest.slice(4)}` : `q=${searchRequest}`;
    searchInput.value = '';
    getWeatherData(`http://api.openweathermap.org/data/2.5/weather?${query}&units=metric&APPID=${APPID_KEY}`, transformSunriseData);
    getWeatherData(`http://api.openweathermap.org/data/2.5/forecast?${query}&units=metric&APPID=${APPID_KEY}`, transformDailyData);
};

function transformSunriseData(data) {
    //console.log(data);
}

function transformDailyData(data) {
    var dailyData = new DailyData(data);
    console.log(dailyData);
    render({
        '.forecast-table': {
            '.details__wind': dailyData.wind,
            '.details__rain': dailyData.rain,
            '.details__phase': dailyData.phases,
            '.details__temperature': dailyData.temperatures,
            '.day-forecast__day': dailyData.dayNames,
        }
    });
}
