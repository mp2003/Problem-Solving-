/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
    let sum = 0;
    for (let i = 0; i < s.length -1; i++) {
        // console.log(s.charCodeAt(i), String.fromCharCode(s.charCodeAt(i) + 'a'.charCodeAt(0)));
        // console.log(typeof Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1)))
        sum += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
    }

    return sum;
};