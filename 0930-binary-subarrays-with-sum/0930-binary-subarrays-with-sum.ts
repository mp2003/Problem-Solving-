function limit(nums: number[], goal: number) {
    if ( goal < 0)
        return 0;
    let sum = 0;
    let i = 0, j = 0, k = 0;

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

    console.log(limit(nums, goal) );
    console.log(limit(nums, goal-1) );

    return limit(nums, goal) - limit(nums, goal - 1);
};