function twoSum(nums: number[], target: number): number[] {
    let map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        let num = target - nums[i];
        if (map.has(num)) {
            return [map.get(num), i]
        }
        map.set(nums[i], i);
    }
}