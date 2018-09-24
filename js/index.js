const APPID_KEY = 'e33262cd6a432b1c3dc5181a736dbc41';

var search = new Search('search-input');

var todayFetcher = new Fetcher('http://api.openweathermap.org/data/2.5/weather', {
    param: {
        units: 'metric',
        APPID: APPID_KEY },
    transformer: TodayData
    }, search);

var forecastFetcher = new Fetcher('http://api.openweathermap.org/data/2.5/forecast', {
    param: {
        units: 'metric',
        APPID: APPID_KEY },
    transformer: ForecastData
    }, search);

var basicInfoRenderer = new rToday('#basic-weather-data', todayFetcher);
var forecastRenderer = new rForecast('sadf', forecastFetcher);


initTabberElement({
    id: 'tabber',
    blocks: {
        selector: '.graphic', 
        none: 'tabber-none'
    },
    buttons: {
        selector: '.tabber__button',
        selected: 'tabber__button--selected' 
    }
});
