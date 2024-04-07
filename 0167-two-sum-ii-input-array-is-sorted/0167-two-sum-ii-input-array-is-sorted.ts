function twoSum(nums: number[], target: number): number[] {
    let map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        let comp = target - nums[i];
        if (map.has(comp)) {
            return [map.get(comp) + 1, i + 1];
        }
        map.set(nums[i], i);
    }
};