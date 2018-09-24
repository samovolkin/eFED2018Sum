function rForecast(id) {
    Renderer.apply(this, arguments);

    this.onUpdate = function(data) {
        this.render({
            '.forecast': {
                '.forecast-item__temperature': data.formattedTemperatures,
                '.forecast-item__day-name': data.dayNames,
                '.forecast-item__weather-img': data.icons
            },
            '.additional-data__rain': {
                '.value-label': data.todayRain
            },
            '.rain-graphic': {
                '.column': extract(data.today, {height: ['rain', (x) => `${x*2}%`]}),
                '.column__label': extract(data.today, {textContent: ['rain', (x) => `${x.toFixed(2)}`]}) 
            },
            '.temperature-graphic': {
                '.column': extract(data.today, {height: ['temp', (x) => `${x*2.4}%`]}),
                '.column__label': extract(data.today, {textContent: ['temp', (x) => `${x^0}°`]})
            },
            '.wind-graphic': {
                '.wind-info__value': data.windSpeedValues,
                '.wind-info__arrow': data.windDegrees.map(function(x) { return {transform: `rotate(${x+90}deg)`};}), //what is wrong with (x) => {transform: `rotate(${x}deg)`}
            },
            '.graphics-timetable': {
                '.graphics-timetable__time': extract(data.today, 'time')
            }
        });
    }.bind(this);
}


rForecast.prototype = Object.create(Renderer.prototype);
rForecast.prototype.constructor = rForecast;