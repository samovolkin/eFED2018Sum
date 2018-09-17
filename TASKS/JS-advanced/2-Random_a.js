function random(sumWith) {
    return new Promise(function(resolve) {
        var timeout = Math.random() * 3000;
        setTimeout(function() {
            resolve(Math.random() * 3 + sumWith);
        }, timeout);
    });
}

random(0)
    .then(random)
    .then(random)
    .then(function(sum) {
        console.log(`Sum of 3 random() is ${sum}`);
    });
