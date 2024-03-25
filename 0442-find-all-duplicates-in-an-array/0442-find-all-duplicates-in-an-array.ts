function findDuplicates(nums: number[]): number[] {
    let res = [];
    let arr = new Array(nums.length).fill(0);
    for ( let i =0 ;i< nums.length;i++){
        arr[nums[i]-1]++;
    }

    for ( let i in arr){
        if (arr[i]===2){
            res.push(Number(i)+1);
        }
    }

return res;
};