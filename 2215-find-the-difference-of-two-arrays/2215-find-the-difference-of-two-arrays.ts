function findDifference(nums1: number[], nums2: number[]): number[][] {
    let res: number[][] = [];
    let ans1 = [];
    let ans2 = [];
    let map1 = new Map<number, number>();
    let map2 = new Map<number, number>();

    for (let val of nums1) {
        map1.set(val, 1);
    }

    for (let val of nums2) {
        map2.set(val, 1);
    }

    for (let [key,] of map1) {
        if (!map2.has(key)) {
            ans1.push(key);
        }
    }

    for (let [key,] of map2) {
        if (!map1.has(key)) {
            ans2.push(key);
        }
    }

    console.log([ans1, ans2]);
    return [ans1, ans2];
}
