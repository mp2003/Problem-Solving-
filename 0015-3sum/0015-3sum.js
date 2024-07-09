/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    let sol = [];
    for (let i = 0; i < nums.length; i++) {
        let a = nums[i];
        if (i > 0 && a === nums[i - 1])
            continue;
        let k = i + 1, j = nums.length - 1;
        while (k < j) {
            if (a + nums[k] + nums[j] < 0)
                k++;
            else if (a + nums[k] + nums[j] > 0)
                j--;
            else {
                sol.push([a, nums[k], nums[j]])
                k++;
                while (nums[k] == nums[k - 1] && k < j)
                    k++;
            }
        }
    }
    return sol;
};