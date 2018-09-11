function TodayData(data) {
    console.log(data);
    this.townName = `${data.name}, ${data.sys.country}`;
    this.dayName = (new Date()).toDateString().slice(0,3);
    this.weatherType = data.weather[0].main;
    this.temperature = `${data.main.temp^0}°C`;
    this.humidity = `${data.main.humidity}%`;
    this.wind = `${data.wind.speed^0} m/s`;
    this.img = {src: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`};
}