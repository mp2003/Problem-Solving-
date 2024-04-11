var removeDigit = function (number, digit) {
    let num = digit.charCodeAt(0);
    let max = BigInt(0);
    for (let i = 0; i < number.length; i++) {
        let numStr = number;
        if (number[i].charCodeAt(0) === num) {
            numStr = numStr.substring(0, i) + numStr.substring(i + 1);
            max = max < BigInt(numStr) ? BigInt(numStr) : max;
        }
        console.log(numStr);
    }

    return String(max);
};
