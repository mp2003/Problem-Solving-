/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let map = new Map();
    let ans = [];
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    let arr = Array.from(map);
    arr.sort((a, b) => b[1] - a[1]);
    console.log(map, arr);
    ans = arr.slice(0, k).map(i => i[0]);
    return ans;
};