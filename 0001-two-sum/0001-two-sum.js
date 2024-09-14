/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums,target) {


	let map = new Map();
		
	//loop 
	for ( let i =0 ; i<nums.length ; i++){
		if ( map.has(target-nums[i] ))
			{   
                // console.log(map);
                return [ i , map.get(target-nums[i])]
            }
		
			map.set(nums[i],i);	
		
	}

}