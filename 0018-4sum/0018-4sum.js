/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    nums.sort((a, b) => a - b);
    // console.log(nums);
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        let a = nums[i];
        if (i > 0 && a === nums[i - 1])
            continue;
        for (let j = i + 1; j < nums.length; j++) {
            let b = nums[j];
            if (j > i+1 && b === nums[j - 1])
            continue;
            let l = j + 1, r = nums.length - 1;
            while (l < r) {
                let sum = a + b + nums[l] + nums[r];
                // console.log([a,b,nums[l],nums[r]],sum)
                if (sum > target)
                    r--;
                else if (sum < target)
                    l++;
                else {
                    ans.push([a, b, nums[l], nums[r]]);
                    l++;
                    while (nums[l] === nums[l - 1] && l < r) {
                        l++;
                    }
                }
            }
        }
    }
    return ans;
};