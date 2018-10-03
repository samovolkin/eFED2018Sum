const APPID_KEY = "e33262cd6a432b1c3dc5181a736dbc41";

const page = new Page({
    search: '#search-input',
    fetchers: {
        'today': {
            url: "http://api.openweathermap.org/data/2.5/weather",
            param: { units: "metric", APPID: APPID_KEY },
            mapper: mapTodayData,
            onError: onError
        },
        'forecast': {
            url: "http://api.openweathermap.org/data/2.5/forecast",
            param: { units: "metric", APPID: APPID_KEY },
            mapper: mapForecastData,
            onError: onError
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
    }
});

const renderer = new Renderer(page.fetchers['forecast']);
renderer.onUpdate = function(data) {
    this.render({
        '.body': {
            '.onerror': {display: 'none'},
            '.main': {display: 'block'}
        },
        '.forecast': {
            '.forecast-item__temperature': data.formattedTemperatures,
            '.forecast-item__day-name': data.dayNames,
            '.forecast-item__weather-img': data.icons
        },
        '.rain-graphic': {
            '.column': Utils.extract(data.today, {height: ['rain', (x) => `${x*2}%`]}),
            '.column__label': Utils.extract(data.today, {textContent: ['rain', (x) => `${x.toFixed(2)}`]}) 
        },
        '.temperature-graphic': {
            '.column': Utils.extract(data.today, {height: ['temp', (x) => `${x*2.4}%`]}),
            '.column__label': Utils.extract(data.today, {textContent: ['temp', (x) => `${x^0}°`]})
        },
        '.wind-graphic': {
            '.wind-info__value': data.windSpeedValues,
            '.wind-info__arrow': data.windDegrees.map(function(x) { return {transform: `rotate(${x+90}deg)`};}), //what is wrong with (x) => {transform: `rotate(${x}deg)`}
        },
        '.graphics-timetable': {
            '.graphics-timetable__time': Utils.extract(data.today, 'time')
        }
    });
};

function onError() {
    renderer.render({
        '.body': {
            '.onerror': {display: 'block'},
            '.main': {display: 'none'}
        }
    });
}

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

page.search.share('q=Izhevsk');