function sumWith(number) {
    return (this.currentValue += number);
}

var number = 2;

// Способ первый: создать глобальную переменную currentValue
var currentValue = 0;
alert(sumWith(number));


// Способ второй: создать объект со свойством currentValue и
// привязывать его контекст в call()
var contextObject = { currentValue: 0 };
alert(sumWith.call(contextObject, number));


// [Дополнительное]
currentValue = -1;
function returnMore() {
    return sumWith(2);
}