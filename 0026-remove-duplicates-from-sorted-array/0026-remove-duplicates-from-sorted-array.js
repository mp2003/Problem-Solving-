/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k =0 ;
    for ( let i =0 ; i< nums.length ; i++){
        if ( nums[i-1] !== nums [ i]){
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};