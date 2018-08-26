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
    for (let key in a) {
        if (!(key in b)) return false;
        else {
            if (a[key] instanceof Object && b[key] instanceof Object && deepCompare(a[key], b[key])) continue;
            if (a[key] !== b[key]) return false;
        }
    }
    return true;
}

export function makeChessBoard(height, width) {
    var result = "";
    for (; height > 0; height--) {
        for (let i = 0; i < width; i++) result += (i + height) % 2 == 0 ? "#" : " ";
        result += "\n";
    }
    return result;
}