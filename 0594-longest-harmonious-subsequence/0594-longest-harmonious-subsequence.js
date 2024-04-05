/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
    let map = new Map();
    let max = 0;
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    for (let val of map.keys()) {
        if (map.has(val - 1)) {
            max = Math.max(max, map.get(val - 1) + map.get(val));
        }
    }
    return max;
};