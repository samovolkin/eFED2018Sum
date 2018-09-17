function makeCounter(length) {
    var history = [];
    var count = 0;
    return {
        next: function() {
            if (history.length == length) history.shift();
            history.push( ++count );
            return count;
        },
        prev: function() {
            if (history.length == length) history.shift();
            history.push( --count );
            return count;
        },
        history: history
    };
}