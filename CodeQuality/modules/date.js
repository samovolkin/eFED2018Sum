export function getNames(date) {
    return (
        "" +
        {   0: "January",
            1: "February",
            2: "March",
            3: "April",
            4: "May",
            5: "June",
            6: "July",
            7: "August",
            8: "September",
            9: "October",
            10: "November",
            11: "December" }[date.getMonth()] + ", " +
        {   0: "Monday",
            1: "Tuesday",
            2: "Wednesday",
            3: "Thursday",
            4: "Friday",
            5: "Saturday",
            6: "Sunday" }[date.getDay()]
    );
}

export function differenceInYears(dateA, dateB, round=1) {
    var millisecondsInYear = 31536000000;
    return (Math.abs(dateA - dateB) / millisecondsInYear).toFixed(round);
}
