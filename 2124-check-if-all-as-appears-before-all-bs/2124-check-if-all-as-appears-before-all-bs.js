/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function (s) {
    let map = new Map();
    let arr = s.split("");
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === 'b') {
            if (arr[i + 1] === 'a') return false;
        }
    }
    return true;
};