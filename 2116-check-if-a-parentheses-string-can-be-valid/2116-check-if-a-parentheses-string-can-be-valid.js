/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
var canBeValid = function (s, locked) {
    if (s.length % 2 !== 0) return false;
    let open = 0, close = 0;

    for (let i = 0; i < s.length; i++) {
        if (locked[i] === "0" || s[i] === "(") {
            open++;
        } else {
            close++;
        }
        if (open - close < 0) {
            return false;
        }
    }
    open = 0, close = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (locked[i] === "0" || s[i] === ")") {
            close++;
        } else {
            open++;
        }

        if (close - open < 0) return false
    }
    return true;
};