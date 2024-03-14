function sumLimit(nums: number[], goal: number): number {
    if (goal < 0) return 0;

    let sum: number = 0;
    let i = 0, j = 0;
    let k = 0;
    while (j < nums.length) {
        sum += nums[j];
        while (sum > goal) {
            sum -= nums[i];
            i++;
        }
        k += j - i + 1;
        j++;
    }
    return k;
}

function numSubarraysWithSum(nums: number[], goal: number): number {
    return sumLimit(nums,goal) - sumLimit(nums,goal-1);
};