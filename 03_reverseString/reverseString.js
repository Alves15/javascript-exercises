const reverseString = function(string) {
    let text = string;
    let splitText = text.split("");
    let reverseText = splitText.reverse();
    let joinText = reverseText.join("");

    return joinText;
};

reverseString('hello');

// Do not edit below this line
module.exports = reverseString;
