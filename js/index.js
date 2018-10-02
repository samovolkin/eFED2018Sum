const APPID_KEY = "e33262cd6a432b1c3dc5181a736dbc41";

const page = new Page({
    search: '#search-input',
    fetchers: {
        'today': {
            url: "http://api.openweathermap.org/data/2.5/weather",
            param: { units: "metric", APPID: APPID_KEY },
            transformer: TodayData,
        },
        'forecast': {
            url: "http://api.openweathermap.org/data/2.5/forecast",
            param: { units: "metric", APPID: APPID_KEY },
            transformer: ForecastData,
        }
    },
    components: {
        'basicWeather': {
            target: '.basic-weather',
            subscribe: 'today',
            labels: {
                townName: '.basic-weather__town-name',
                dayName: '.basic-weather__day-name',
                weatherType: '.basic-weather__weather-type',
                temperature: '.basic-weather__temperature' 
            }
        },
    }
});



const basicInfoRenderer = new rToday("#basic-weather-data", page.fetchers.today);
const forecastRenderer = new rForecast("sadf", page.fetchers.forecast);

initTabberElement({
    id: "tabber",
    blocks: {
        selector: ".graphic",
        none: "tabber-none",
    },
    buttons: {
        selector: ".tabber__button",
        selected: "tabber__button--selected",
    },
});
