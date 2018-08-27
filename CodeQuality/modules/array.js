export function range(start, end, step = 1) {
    step *= Math.sign(end - start);
    var turns = Math.abs((end - start) / step);
    var buffer = Array();

    for (var i = 0; i <= turns; i++) {
        buffer.push(i * step + start);
    }

    return buffer;
}

export function getReversedArray(arr) {
    var buffer = [];
    
    for (var i in arr) {
        buffer.unshift(arr[i]);
    }

    return buffer;
}

export function reverseArrayInPlace(a) {
    for (var i = 0; i < a.length / 2; i++) {
        var tmp = a[i];
        a[i] = a[a.length - i - 1];
        a[a.length - i - 1] = tmp;
    }
}

export function mergeArrays(...args) {
    var buf = {};
    var mergedArrays = [].concat(...args);

    for (var i in mergedArrays) {
        buf[arr[i]] = true;
    }

    return Object.keys(buf);
}

export function all(arr, func) {
    for (var i in arr) {
        if ( !func(arr[i]) ) return false;
    }

    return true;
}

export function some(arr, func) {
    for (var i in arr) {
        if ( func(arr[i]) ) return true;
    }

    return false;
}

export function findNumbers(arr) {
    var pattern = /^(?!\.*([eE][+-]?\d+)*$)([+-]?(?=\d+)\d*)?\.?\d*([eE][+-]?\d+)?$/;

    return arr.filter(number => pattern.test(number));
}
