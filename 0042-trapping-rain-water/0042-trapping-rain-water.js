/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (nums) {
    let n = nums.length;
    let su = [];
    let pr = [];
    su[n - 1] = 0;
    pr[0] = 0;

    for (let i = n - 2; i >= 0; i--) {
        su[i] = Math.max(su[i + 1], nums[i + 1]);
    }
    for (let i = 1; i < n; i++) {
        pr[i] = Math.max(pr[i - 1], nums[i - 1]);
    }

    console.log(pr, su);

    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans += Math.max(0, Math.min(su[i], pr[i]) - nums[i]);
    }

    return ans;
};