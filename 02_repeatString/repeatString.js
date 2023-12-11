const repeatString = function(string, num) {
    n = 0;
    result = '';
    if (num < 0) {
        return 'ERROR';
    }
    while (n < num) {
        result += string;
        ++n;
    }

    return result;
};

repeatString('hey', 3);


// Do not edit below this line
module.exports = repeatString;
