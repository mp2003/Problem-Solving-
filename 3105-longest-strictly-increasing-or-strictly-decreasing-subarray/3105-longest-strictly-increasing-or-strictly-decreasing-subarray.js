/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums) {
    let maxlen = 1, inc = 1, dec = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i - 1] > nums[i]) {
            inc++;
            dec = 1;
        } else if (nums[i - 1] < nums[i]) {
            dec++;
            inc = 1;
        } else {
            inc = 1;
            dec = 1
        }
        maxlen = Math.max(maxlen, inc, dec);
    }
    return maxlen;
};