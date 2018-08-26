export function range(start, end, step = 1) {
    var buffer = Array();
    step *= Math.sign(end - start);
    var turns = Math.abs((end - start) / step);

    for (let i = 0; i <= turns; i++) {
        buffer.push(i * step + start);
    }
    return buffer;
}

export function getReversedArray(a) {
    var buffer = [];
    for (let i in a) buffer.unshift(a[i]);
    return buffer;
}

export function reverseArrayInPlace(a) {
    for (let i = 0; i < a.length / 2; i++) {
        let tmp = a[i];
        a[i] = a[a.length - i - 1];
        a[a.length - i - 1] = tmp;
    }
}

export function mergeArrays(...args) {
    var buf = {};
    let mergedArrays = [].concat(...args);
    for (let i in mergedArrays) buf[arr[i]] = true;
    return Object.keys(buf);
}

export function all(arr, func) {
    for (let i in arr) if (!func(arr[i])) return false;
    return true;
}

export function some(arr, func) {
    for (let i in arr) if (func(arr[i])) return true;
    return false;
}

export function findNumbers(arr) {
    var pattern = /^(?!\.*([eE][+-]?\d+)*$)([+-]?(?=\d+)\d*)?\.?\d*([eE][+-]?\d+)?$/;

    return arr.filter(number => pattern.test(number));
}
