/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let c=0 ;
    
    for(let i=0 ; i<nums.length ; i++){
        if(nums[i] !== nums[i+2]){
            nums[c] = nums[i];
            c++;
        }
    }

    return c;
};