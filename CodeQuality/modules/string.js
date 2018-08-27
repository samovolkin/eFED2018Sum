export function countChar(str, char) {
    str = str.toLowerCase();
    char = char.toLowerCase();
    
    var count = 0;
    for (var symbol in str) { 
        if (str[symbol] == char) count++;
    }

    return count;
}

export function replaceQuotes(str) {
    return str.replace(/'(\w*)'/g, '"$1"');
}