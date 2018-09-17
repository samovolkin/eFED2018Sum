function randomB() {
    return new Promise(function(resolve) {
        var timeout = Math.random() * 3000;
        setTimeout(function() {
            resolve(Math.random() * 3);
        }, timeout);
    });
}

function makeArrayOfPromises(size, func) {
    var buf = [];

    for (var i = 0; i < size; i++) {
        buf.push(randomB());
    }

    return buf;
}

Promise.all(makeArrayOfPromises(7, randomB())).then(function(values) {
    console.log(values);
});
