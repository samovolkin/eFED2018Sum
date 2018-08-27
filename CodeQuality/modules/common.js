export function tryMultiply(func, a, b) {
    var trying = 0;
    while (true) {
        try {
            console.log("Trying to multiply " + trying++ + " times...");
            return func(a, b);
        } catch (MultiplicatorUnitFailure) {
            continue;
        }
    }
}

export function deepCompare(a, b) {
    function objectsAreEqual(a, b) {
        return (a instanceof Object) && (b instanceof Object) && deepCompare(a, b);
    }

    for (let key in a) {
        if (!(key in b)) return false;
        if (objectsAreEqual(a[key], b[key])) continue;
        if (a[key] !== b[key]) return false;
    }

    return true;
}

export function makeChessBoard(height, width) {
    function lineIsEven(i, height) {
        return (i + height) % 2 == 0;
    }

    var result = "";
    for (; height > 0; height--) {
        for (var i = 0; i < width; i++) {
            if (lineIsEven(i, height)) result += "#";
            else result += " ";
        }
        result += "\n";
    }
    return result;
}