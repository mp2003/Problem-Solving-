function findDuplicate(nums: number[]): number {
    let arr = new Array(nums.length).fill(0);
    for (let num of nums) {
        if (arr[num - 1] > 0) { return num }
        arr[num - 1] = num; 
    }
};