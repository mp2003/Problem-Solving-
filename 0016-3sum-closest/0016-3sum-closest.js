/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    let ans = 0;
    let diff = Infinity;
    for (let i = 0; i < nums.length; i++) {
        let a = nums[i];
        if (i > 0 && nums[i - 1] === a) continue;
        let l = i + 1, r = nums.length - 1;
        while (l < r) {
            let sum = a + nums[l] + nums[r];
            // console.log(sum, diff)
            if (diff > Math.abs(target - sum)) {
                ans = sum;
                diff = Math.abs(target - sum);
            }
            if (sum === target) {
                ans = sum;
                l++;
                while (nums[l] == nums[l - 1] && l < r) {
                    l++;
                }
            } else if (sum > target) r--;
            else l++;
        }
    }
    return ans;
};