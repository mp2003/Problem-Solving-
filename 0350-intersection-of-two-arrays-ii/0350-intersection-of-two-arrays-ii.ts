function intersect(nums1: number[], nums2: number[]): number[] {
    let map = new Map<number, number>();
    let res: number[] = [];

    for (let val of nums1) {
        map.set(val, (map.get(val) || 0) + 1);
    }

    for (let val of nums2) {
        if (map.has(val) && map.get(val) > 0) {
            map.set(val, map.get(val) - 1);
            res.push(val);
        }
    }

    return res;
};