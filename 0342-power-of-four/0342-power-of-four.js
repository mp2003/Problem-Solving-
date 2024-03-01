/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
    return Number.isInteger(Math.log(n) / Math.log(4));
};