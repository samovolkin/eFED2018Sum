function rDaily(id) {
    Renderer.apply(this, arguments);

    this.onUpdate = function(data) {
        this.render({
            '.forecast-table': {
                '.details__wind': data.wind,
                '.details__rain': data.rain,
                '.details__phase': data.phases,
                '.details__temperature': data.temperatures,
                '.day-forecast__day': data.dayNames,
            }
        });
    }.bind(this);
}


rDaily.prototype = Object.create(Renderer.prototype);
rDaily.prototype.constructor = rDaily;