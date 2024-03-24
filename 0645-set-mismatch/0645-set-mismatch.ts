function findErrorNums(nums: number[]): number[] {
    let res = [];
    let maxNum = Math.max(...nums);
    let farr: number[] = new Array(maxNum).fill(0);

    for (let i = 0; i < nums.length; i++) {
        farr[nums[i] - 1]++;
    }
    for (let i in farr) {
        if (farr[i] > 1)
            res.push(Number(i) + 1);
    }
    console.log(farr);
    let set: Set<number> = new Set([...nums])

    for (let i = 1; i <= nums.length; i++) {
        if (!set.has(i)) {
            res.push(i);
        }
    }
    return res;
};