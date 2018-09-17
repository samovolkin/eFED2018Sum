function makeAlert(count, delay=2000) {
    var id = setInterval(function() {
        console.log(`Count is ${count}`);
        if (--count == 0) clearInterval(id);
    });
}

makeAlert(5, 2000);


function makeStepAlert(count, delay=1000, delta=2000) {
    setTimeout(function() {
        console.log(`Stepping alert count: ${count} (delay=${delay})`);

        if (--count == 0) return;
        makeStepAlert(count, delay+delta);
    }, delay);
}

makeStepAlert(5);