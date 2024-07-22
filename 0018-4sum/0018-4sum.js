/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    let ans = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        let a = nums[i];
        if (i > 0 && a === nums[i - 1]) continue;
        for (let j = i + 1; j < nums.length; j++) {
            let b = nums[j];
            if (j > i + 1 && b === nums[j - 1]) continue;
            let l = j + 1, r = nums.length - 1;
            while (l < r) {
                let sum = a + b + nums[l] + nums[r];
                if (sum < target) l++;
                else if (sum > target) r--;
                else {
                    ans.push([a, b, nums[l], nums[r]]);
                    l++;
                    while (l < r && nums[l] === nums[l - 1]) {
                        l++;
                    }
                }
            }
        }
    }
    return ans;
};