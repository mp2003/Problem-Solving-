/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    nums.sort((a, b) => a - b);
    let map = new Map();
    let res = [];
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    for (let i = 1; i <= nums.length; i++) {
        if (map.has(i) && map.get(i) === 2) {
            res.push(i);
        }
    }

    return res;
};