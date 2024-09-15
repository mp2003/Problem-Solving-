/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let arr = new Array(n+1).fill(0);
    for ( let i =0; i<nums.length; i++){
        arr[nums[i]]= true;
    }
    console.log(arr);
    return arr.indexOf(0);
};