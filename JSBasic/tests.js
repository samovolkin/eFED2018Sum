import * as common from "./modules/common.js";
import * as str from "./modules/string.js";
import * as arr from "./modules/array.js";
import * as weather from "./modules/weather.js";
import * as dt from "./modules/date.js";


function multiplyOrThrow(a, b) {
    if (Math.random() < 0.5) {
        return a * b;
    } else {
        throw "MultiplicatorUnitFailure";
    }
}

console.log("Проверка функции подсчета букв:\nПодсчет буквы 'm' в строке 'My Random String'");
console.log(countChar("My Random String", "m"));
console.log("Проверка функции makeChessBoard(8, 8):");
console.log(makeChessBoard(8, 8));
console.log("Проверка deepCompare(): ");
console.log("{1: 1, 3: 222}, {1: 1, 3: 999} - " + deepCompare({ 1: 1, 3: 222 }, { 1: 1, 3: 999 }));
console.log(
    "{1: {1: 2, 3: true}}, {1: {1: 2, 3: true}} - " + deepCompare({ 1: { 1: 2, 3: true } }, { 1: { 1: 2, 3: true } })
);
console.log(
    "{1: {1: 2, 3: 'true'}}, {1: {1: 2, 3: true}} - " +
        deepCompare({ 1: { 1: 2, 3: "true" } }, { 1: { 1: 2, 3: true } })
);
console.log("Проверка reverseArray():");
console.log("[1, 2, 3, 4, 5] -> " + getReversedArray([1, 2, 3, 4, 5]));
console.log("Проверка reverseArrayInPlace():");
var ak = [1, 2, 3, 4, 5, 6];
console.log("Начальный массив: " + ak);
reverseArrayInPlace(ak);
console.log("Конечный массив: " + ak);
console.log("Проверка mergeArrays():");
console.log("[1, 2, 3, 4, 5], [5, 6, 7, 8, 9], [1], [1, 10]");
console.log("=> " + mergeArrays([1, 2, 3, 4, 5], [5, 6, 7, 8, 9], [1], [1, 10]));
console.log("Проверка every():");
console.log("every([NaN, NaN, NaN], Number.isNaN) -> " + every([NaN, NaN, NaN], Number.isNaN));
console.log("every([NaN, 7, NaN], Number.isNaN) -> " + every([NaN, 7, NaN], Number.isNaN));
console.log("Проверка some():");
console.log("some([NaN, 7, NaN], Number.isNaN) -> " + some([NaN, 7, NaN], Number.isNaN));
console.log("Проверка multiplyOrThrow():");
console.log(tryMultiply());
console.log("Проверка getNames():");
console.log("Today is " + getNames(new Date()));
console.log("Проверка differenceInYears():");
console.log("today - 09.01.1998 = " + differenceInYears(new Date(1998, 0, 8), new Date()));
console.log("Провека replaceQuotes():");
console.log("I'm a 'man'. I'm the 'guardian' -> " + replaceQuotes("I'm a 'man'. I'm the 'guardian'"));
console.log("Проверка функции findNumbers:");
console.log('findNumbers([".1", ".", "+.", "+1.", "+", "+23", "1.3E-4", "E-4", "..", "+-", "11", "", "1e2", "1.")');
console.log(findNumbers([".1", ".", "+.", "+1.", "+", "+23", "1.3E-4", "E-4", "..", "+-", "11", "", "1e2", "1."]));
console.log("Проверка функции findAnomaly:");
console.log('findAnomaly([{a: 2, b: 2}, {f: 33, a: 1}, {a: 87, b: 2}, {a: 45}], "a")');
console.log(findAnomaly([{ a: 2, b: 2 }, { f: 33, a: 1 }, { a: 87, b: 2 }, { a: 45 }], "a"));
console.log("Проверка функции weatherStat:");
console.log(
    "Средняя температура за январь 2017 года: " +
        weatherStat(weatherArray, { city: "Izhevsk", date: new Date(2017, 0) })
);
console.log(
    "Средняя температура за июль 2017 года: " + weatherStat(weatherArray, { city: "Izhevsk", date: new Date(2017, 6) })
);

var weatherArray = {
    Izhevsk: {
        2017: {
            0: [1, -14, 3, -5, 5, 0, 7],
            1: [1, 2, 3, 4, 5, 6, 7],
            2: [1, 2, 3, 4, 5, 6, 7],
            3: [1, 2, 34, 4, 5, 6, 7],
            4: [1, 2, 3, 4, 21, 6, 7],
            5: [1, 2, 3, 4, 5, 6, 7],
            6: [1, 32, 15, 40, 20, 23, 7],
            7: [1, 2, 3, 4, 5, 6, 7],
            8: [1, 2, 34, 4, 5, 6, 7],
            9: [1, 2, 3, 4, 4, 6, 7],
            10: [1, 2, 21, 4, 5, 6, 7],
            11: [1, 2, 3, 4, 5, 6, 7],
        },
        2018: {
            0: [1, -10, 3, 4, 5, 6, 7],
            1: [1, 2, 3, 4, 5, 6, 7],
            2: [1, 71, 3, 4, 5, 6, 7],
            3: [1, 24, 34, 4, 5, 6, 7],
            4: [1, 2, 24, 4, 21, 6, 7],
            5: [1, 2, 3, 32, 5, 6, 7],
            6: [1, 32, 3, 4, 5, 6, 7],
            7: [1, 2, 86, 74, 74, 6, 7],
            8: [1, 2, 34, 4, 5, 6, 7],
            9: [1, 2, 3, 4, 4, 6, 7],
            10: [1, 2, 21, 4, 100, 6, 7],
            11: [1, 2, 3, 4, 5, 6, 7],
        },
    },
};