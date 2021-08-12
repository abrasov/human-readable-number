module.exports = function toReadable(number) {
    const units = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const tens = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const extras = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    let extra = number % 10;
    let numbOfHundred = Math.floor(number / 100);
    let numbOfDec = Math.floor((number % 100) / 10);
    let answer = "";

    if (number === 0) {
        answer = "zero";
    } else if (number < 10) {
        answer = units[number];
    } else if (number < 20) {
        answer = extras[extra];
    } else if (number < 100) {
        if (extra > 0) {
            answer = tens[numbOfDec - 2] + " " + units[extra];
        } else answer = tens[numbOfDec - 2];
    } else {
        answer = units[numbOfHundred] + " hundred";
        if (numbOfDec === 0 && extra === 0) {
            return answer;
        }
        if (numbOfDec === 0) {
            answer += " " + units[extra];
        } else if (numbOfDec === 1) {
            answer += " " + extras[extra];
        } else if (extra > 0) {
            answer += " " + tens[numbOfDec - 2] + " " + units[extra];
        } else answer += " " + tens[numbOfDec - 2];
    }
    return answer;
};
