/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
    function Atmost(nums, goal) {
        if (goal < 0) return 0;
        let i = 0, j = 0, sum = 0, count = 0;
        while (j < nums.length) {
            sum += nums[j];
            while (sum > goal) {
                sum -= nums[i];
                i++;
            }
            count += j - i + 1
            j++;
        }
        return count;
    }

    return Atmost(nums, goal) - Atmost(nums, goal - 1);
};