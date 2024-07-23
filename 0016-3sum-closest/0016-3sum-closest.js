/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    let diff = Infinity, ans = 0;
    for (let i = 0; i < nums.length; i++) {
        let a = nums[i];
        if (i > 0 && a === nums[i - 1]) continue;
        let l = i + 1, r = nums.length - 1;
        while (l < r) {
            let sum = a + nums[l] + nums[r];
            if (diff > Math.abs(target - sum)) {
                diff = Math.abs(target - sum);
                ans = sum;
            }
            // console.log("a:", a, "b:", nums[l], "c:", nums[r], "diff", diff);

            if (sum > target) r--;
            else if (sum < target) l++;
            else {
                return sum;
                l++;
                while (l < r && nums[l] === nums[l - 1]) l++;
            }
            // ans = target - diff;
        }
    }
    return ans;
};