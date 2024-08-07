/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let num = digits.reduce((acc, val) => {
        return acc + val;
    }, "");
    num = BigInt(num) + BigInt(1);
    console.log(num.toString().split(""));
    return num.toString().split("");
};