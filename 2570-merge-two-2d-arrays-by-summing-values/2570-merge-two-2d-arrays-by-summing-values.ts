function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
    let map = new Map<number , number>();
    for (let [num , val ] of nums1) {
        map.set(num, (map.get(num) || val))
    }

    for (let [num , val ] of nums2) {
        if (map.has(num)) {
            map.set(num, map.get(num) + val);
        } else {
            map.set(num, map.get(num) || val)
        }
    }

    const sortedArray : number[][]= Array.from(map.entries()).sort((a, b) => a[0] - b[0]);

    return sortedArray;
};