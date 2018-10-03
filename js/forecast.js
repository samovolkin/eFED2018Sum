const APPID_KEY = "e33262cd6a432b1c3dc5181a736dbc41";

const page = new Page({
    search: '#search-input',
    fetchers: {
        'daily': {
            url: "http://api.openweathermap.org/data/2.5/forecast",
            param: { units: "metric", APPID: APPID_KEY },
            mapper: mapDailyData,
            onError: onError
        }
    }
});

const renderer = new Renderer(page.fetchers.daily);

renderer.onUpdate = function(data) {
    this.render({
        '.body': {
            '.onerror': {display: 'none'},
            '.main': {display: 'block'}
        },
        '.forecast-table': {
            '.details__wind': data.wind,
            '.details__rain': data.rain,
            '.details__phase': data.phases,
            '.details__temperature': data.temperatures,
            '.day-forecast__day': data.dayNames,
        }
    });
}

function onError() {
    renderer.render({
        '.body': {
            '.onerror': {display: 'block'},
            '.main': {display: 'none'}
        }
    });
}

page.search.share('q=Izhevsk');