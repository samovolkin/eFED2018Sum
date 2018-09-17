function compare(a, b) {
    var args = arguments;
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (args.length < 2) reject("Количество аргументов не равно двум!");
            if ([a, b].some(x => typeof x != "number" || isNaN(x))) reject("Передано не число!");

            resolve(Math.sign(a - b));
        }, 1000);
    });
}

compare(0, 1)
    .then(console.log)
    .catch(console.log);
compare(0, "d")
    .then(console.log)
    .catch(console.log);
compare(0)
    .then(console.log)
    .catch(console.log);