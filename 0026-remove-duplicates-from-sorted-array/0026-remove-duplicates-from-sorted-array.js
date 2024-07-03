/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let x = 0, y = 1;
    while (y < nums.length) {
        while (y < nums.length && nums[x] === nums[y]) {
            y++;
        }
        if (y < nums.length && nums[x] !== nums[y]) {

            x++;
            nums[x] = nums[y];
            y++;
        }
    }
    return x+1;
};