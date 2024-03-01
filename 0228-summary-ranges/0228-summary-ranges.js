/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    let stack = [];
    for (let i = 0; i < nums.length; i++) {
        let start = nums[i];

        while (i < nums.length - 1 && nums[i] + 1 === nums[i + 1]) {
            // console.log(nums[i])
            i++;
        }

        let end = nums[i];
        // console.log(">>>"+end);

        stack.push(start === end ? `${start}` : `${start}->${end}`)
    }
    return stack ;
};