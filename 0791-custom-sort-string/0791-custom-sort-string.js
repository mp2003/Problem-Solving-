/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
    let res = "";
    let map = new Map();
    console.log(s);
    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    console.log(map);
    for (let char of order) {
        if (map.has(char)) {
            while (map.get(char) > 0) {
                res += char;
                map.set(char, map.get(char) - 1);
            }
        }
    }

    for (let [val, freq] of map) {
        while (freq > 0) {
            res += val;
            freq --;
        }
    }
    return res;
};