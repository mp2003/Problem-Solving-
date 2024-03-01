/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function (s) {
    let left = 0;
    let arr = s.split("");

    for (let i = 0; i < s.length; i++) {
        if (arr[i] === '1') {
            [arr[i], arr[left]] = [arr[left], arr[i]];
            left++;
        }
    }
    [arr[left - 1], arr[arr.length - 1]] = [arr[arr.length - 1], arr[left - 1]];

    return arr.join('');
};