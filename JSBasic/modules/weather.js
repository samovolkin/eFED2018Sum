export function findAnomaly(arr, param) {
    var min = arr.reduce(function(previousItem, currentItem) {
        return previousItem[param] > currentItem[param] ? currentItem : previousItem;
    }, (initialValue = arr[0]));

    var max = arr.reduce(function(previousItem, currentItem) {
        return previousItem[param] < currentItem[param] ? currentItem : previousItem;
    }, (initialValue = arr[0]));

    return { min: min, max: max };
}

export function weatherStat(arr, city_date) {
    // arr - Array
    // city_date - {city: String, date: new Date()}
    var city = city_date["city"],
        date = city_date["date"],
        year = date.getFullYear(),
        month = date.getMonth();

    var days = arr[city][year][month];
    var temperatureSum = days.reduce((accumulator, current) => accumulator + current, (initialValue = 0));

    return temperatureSum / days.length;
}
