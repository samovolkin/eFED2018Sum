function mapDailyData(data) {
    return new DailyData(data);
}

function DailyData(data) {
    this.daily = getDailyData(data);
    this.temperatures = this.daily.map((x) =>  `${x.temp^0}°`);
    this.wind = this.daily.map((x) => `${x.wind^0} m/s`);
    this.rain = this.daily.map((x) => `${x.rain.toFixed(2)} mm`);
    this.phases = this.daily.map((item) => item.time);
    this.dayNames = function (size) {
        var todayDayNumber = (new Date()).getDay();
        return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].slice(todayDayNumber, todayDayNumber + size);
    }(5);
}


function getDailyData(data) {
    var list = data.list;
    var buffer = [];
    for(var i = 0; i < list.length; i+=2) {
        var item = list[i];
        buffer.push({
            temp: item.main.temp,
            wind: item.wind.speed,
            rain: ('rain' in item && '3h' in item.rain)? item.rain['3h'] : 0,
            time: item.dt_txt.slice(11, 16)
        });
    }
    return buffer;
}