function subarraySum(nums: number[], k: number): number {
    let sum = 0, count = 0;
    let map = new Map<number, number>();
    map.set(0, 1);
    for (let j = 0; j < nums.length; j++) {
        sum += nums[j];
        if (map.has(sum - k)) {
            count += map.get(sum - k)!;
        }
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    return count;
}
