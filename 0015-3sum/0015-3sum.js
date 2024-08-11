/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        let a = nums[i];
        if (i > 0 && nums[i - 1] === a) continue;
        let l = i + 1, r = nums.length - 1;
        while (l < r) {
            let sum = a + nums[l] + nums[r];
            // console.log(sum, a, nums[l], nums[r]);
            if (sum === 0) {
                ans.push([a, nums[l], nums[r]]);
                l++;
                while (nums[l] == nums[l - 1] && l < r)
                    l++;
            }
            else if (sum < 0) l++;
            else r--;
        }
    }
    return ans;
};