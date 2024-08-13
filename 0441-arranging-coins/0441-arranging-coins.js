/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    let l = 1, r = n;
    let ans = 0;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        let sum = mid * (mid + 1) / 2;
        if (sum > n) r = mid - 1;
        else {
            l = mid + 1;
            ans = Math.max(ans, mid);
        }
    }
    return ans;
};