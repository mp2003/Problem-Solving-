/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
    let nums = Array.from(new Set(arr));
    let map = new Map();
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i + 1);
    }


    let ans = [];
    for (let num of arr) {
        ans.push(map.get(num));
    }

    return ans;
};