/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
    let diff = 0, minNum = Infinity;
    for (let num of nums) {
        minNum = Math.min(minNum, num);
        diff = Math.max(num - minNum, diff);
    }
    return diff === 0 ? -1 : diff;
};