/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let index = -1;
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        let mid = Math.floor((r - l) + l / 2);
        if (nums[mid] < target) l++;
        else if (nums[mid] > target) r--;
        else return mid;
    }

    return index;
};