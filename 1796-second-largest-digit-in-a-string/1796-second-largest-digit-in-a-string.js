/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
    let matches = s.match(/\d/g);
    if (!matches) {
        return -1;
    }

    let num = new Set(matches.map((num) => Number(num)));


    num = Array.from(num);
    if (num.length == 2) {
        let [num1, num2] = num;
        let val = num1 > num2 ? num2 : num1;
        return val;
    }
    num.sort((a, b) => a - b);
    console.log(num)
    return num[num.length - 2] !== undefined ? num[num.length - 2] : -1;
};
