function minimumDifference(nums: number[], k: number): number {
    nums.sort((a, b) => a - b);
    let res = Infinity;
    let i = 0;
    let j = k - 1;

    while (j < nums.length) {
        let diff = nums[j] - nums[i];

        res = Math.min(res, diff);

        i++;
        j++;
    }

    return res ;
};