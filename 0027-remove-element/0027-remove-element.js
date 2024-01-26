var removeElement = function(nums, val) {
    if (nums == null || nums.length == 0)
        return 0;

    let UI = 0;
    
    for ( let i =0 ;i< nums.length ;i++){
        
        if (nums[i] !== val){
            [ nums[i] , nums[UI] ] = [ nums[UI] , nums[i] ];
            UI++;        
        }
    }
    return UI;
};
