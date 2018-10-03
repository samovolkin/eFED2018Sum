const APPID_KEY = "e33262cd6a432b1c3dc5181a736dbc41";

const page = new Page({
    search: '#search-input',
    fetchers: {
        'today': {
            url: "http://api.openweathermap.org/data/2.5/weather",
            param: { units: "metric", APPID: APPID_KEY },
            mapper: mapTodayData,
        },
        'forecast': {
            url: "http://api.openweathermap.org/data/2.5/forecast",
            param: { units: "metric", APPID: APPID_KEY },
            mapper: ForecastData,
        }
    },
    components: {
        'basicWeather': {
            target: '.basic-weather',
            subscribe: 'today',
            labels: {
                city: '.basic-weather__town-name',
                day: '.basic-weather__day-name',
                weatherType: '.basic-weather__weather-type',
                temperature: '.basic-weather__temperature',
                weatherImg: '.basic-weather__img'
            }
        },
        'additional': {
            target: '.additional-data',
            subscribe: 'today',
            labels: {
                humidity: '.additional-data__humidity',
                rain: '.additional-data__rain',
                wind: '.additional-data__wind',
                pressure: '.additional-data__pressure',
                clouds: '.additional-data__clouds'
            }
        },
        'forecast': {
            type: List,
            target: '.forecast',
            itemSelector: '.forecast-item',
            itemLabels: {
                day: '.forecast-item__day-name',
                temperature: '.forecast-item__temperature',
                img: '.forecast-item__weather-img',
            }
        }
    }
});


Utils.initTabberElement({
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
