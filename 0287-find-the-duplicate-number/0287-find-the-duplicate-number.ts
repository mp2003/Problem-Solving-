function findDuplicate(nums: number[]): number {
    let map = new Map<number, number>();
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    for (let [num, freq] of map) {
        if (freq > 1) {
            return num;
        }
    }
};