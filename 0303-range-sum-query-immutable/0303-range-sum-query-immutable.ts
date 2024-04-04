class NumArray {
    nums = [];
    constructor(nums: number[]) {
        this.nums = nums;
    }


    sumRange(left: number, right: number): number {
        let sum = 0;
        for (let i = left; i <= right; i++) {
            sum += this.nums[i];
        }
        return sum;
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */