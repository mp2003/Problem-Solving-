/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    let minDiff = Infinity;
    let ans = 0;
    for (let i = 0; i < nums.length; i++) {
        let a = nums[i];
        if (a == nums[i - 1] && i > 0) continue;
        let l = i + 1, r = nums.length - 1;
        while (l < r) {
            let sum = a + nums[l] + nums[r];
            if (minDiff > Math.abs(sum - target)) {
                minDiff = Math.abs(sum - target);
                ans = sum;
            }
            if (sum > target) r--;
            else if (sum < target) l++;
            else return sum;
        }
    }
    return ans;
};