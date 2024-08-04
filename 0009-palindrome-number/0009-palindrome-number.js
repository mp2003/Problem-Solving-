/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
        let str = x.toString();
        return str.split("").reverse().join("")=== str;
};