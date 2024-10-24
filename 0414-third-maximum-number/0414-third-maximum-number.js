/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    let unique = new Set(nums);

    let arr = Array.from(unique).sort((a, b) => (b - a));
    if (arr.length > 2) {
        return arr[2];
    } else if (arr.length < 2 && nums.length > 2) {
        return arr[arr.length - 1];
    } else {
        return arr[0];
    }
};