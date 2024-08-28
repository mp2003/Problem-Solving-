/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
    let i = 0, j = 0, sum = 0, Msum = 0;
    let map = new Map();
    while (j < nums.length) {
        map.set(nums[j], (map.get(nums[j]) || 0) + 1);
        sum += nums[j];
        if (j - i + 1 === k) {
            if (map.size === k)
                Msum = Math.max(sum, Msum);

            map.set(nums[i], map.get(nums[i]) - 1);
            if (map.get(nums[i]) === 0)
                map.delete(nums[i])
            sum -= nums[i];
            i++;
        }
        j++;
    }
    return Msum;
};