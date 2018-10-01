function rToday(id) {
    Renderer.apply(this, arguments);

    this.onUpdate = function(data) {
        this.render({
            '.basic-weather': {
                '.basic-weather__town-name': data.townName,
                '.basic-weather__day-name': data.dayName,
                '.basic-weather__weather-type':  data.weatherType,
                '.basic-weather__temperature': data.temperature,
                '.basic-weather__img': [data.img]
    
            },
            '.additional-data__humidity': {
                '.value-label': data.humidity
            },
            '.additional-data__wind': {
                '.value-label': data.wind
            }
        });
    }.bind(this);
}


rToday.prototype = Object.create(Renderer.prototype);
rToday.prototype.constructor = rToday;