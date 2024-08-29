/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function (s, k) {
    let set = new Set();
    let i = 0, j = 0;
    while (j < s.length) {
        if (j - i + 1 === k) {
            set.add(s.slice(i, j + 1));
            i++;
        }
        j++;
    }
    return set.size === Math.pow(2, k);
};