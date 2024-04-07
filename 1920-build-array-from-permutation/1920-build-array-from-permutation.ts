function buildArray(nums: number[]): number[] {
    // let arr = [];
    // for (let i = 0; i < nums.length; i++) {
    //     arr[i] = nums[nums[i]];
    // }
    // return arr;


    return nums.map((val,index) => {
        // console.log(index, nums[index]);
        return nums[nums[index]];
    });

};