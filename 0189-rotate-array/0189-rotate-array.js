/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    if (k > nums.length) k = k % nums.length;

    let arr1 = nums.splice(0, nums.length - k);
    let arr2 = nums.splice(nums.length - k);

    nums.length = 0;
    nums.push(...arr2, ...arr1);
    return nums;
};