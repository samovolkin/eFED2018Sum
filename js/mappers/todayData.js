function mapTodayData(data) {
    return {
        city: `Weather in ${data.name}`,
        day: (new Date()).toDateString().slice(0,3),
        weatherType: data.weather[0].main,
        temperature: `${data.main.temp^0}°C`,
        humidity: `${data.main.humidity}%`,
        pressure: `${(data.main.pressure * 0.750062)^0}mm`,
        sunrise: new Date(data.sys.sunrise * 1000),
        sunset: new Date(data.sys.sunset * 1000),
        wind: `${data.wind.speed^0}m/s`,
        clouds: `${data.clouds.all}%`,
        rain: `${(data.rain || {'3h': 0})['3h']}mm`,
        weatherImg: {src: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
    }
}