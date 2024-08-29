/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let i = 0, j = 0, sum = 0, ans = -Infinity;
    while (j < nums.length) {
        sum += nums[j];
        if (j - i + 1 === k) {
            ans = Math.max((sum / k).toFixed(5), ans);
            sum -= nums[i];
            i++;
        }
        j++;
    }
    return ans;
};