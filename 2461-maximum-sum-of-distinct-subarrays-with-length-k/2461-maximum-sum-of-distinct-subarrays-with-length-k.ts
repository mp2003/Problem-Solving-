function maximumSubarraySum(nums: number[], k: number): number {
    let maxSum =0, sum =0 , i=0, j=0;
    let map = new Map < number , number>();
    
    while ( j< nums.length){
        map.set(nums[j], (map.get( nums[j])|| 0) +1);
        sum = sum + nums[j];
        
        if ( j-i+1 === k){
            if ( map.size === k){
                maxSum = Math.max ( maxSum , sum);
            }
            
            map.set(nums[i], map.get( nums[i] ) -1);
            
            if ( map.get(nums[i]) ===0)
                map.delete(nums[i]);
            
            sum-= nums[i];
            
            i++;
            
        }
        
        j++;
    }

return maxSum;
};