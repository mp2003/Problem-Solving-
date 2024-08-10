/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let l = 0, r = nums.length - 1;
    if (nums[l] < nums[r])
        return nums[l];
    while (l < r) {
        let mid = Math.floor((r + l) / 2);

        if (nums[mid] > nums[r])
            l = mid + 1;
        else
            r = mid ;
    }

    return nums[l];
};