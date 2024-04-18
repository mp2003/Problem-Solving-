/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
    let val = init;
    nums.forEach((el, i) => {
        val = fn(val, nums[i]);
    })
    return val;
};