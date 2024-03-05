function findDifference(nums1: number[], nums2: number[]): number[][] {
    let ans1: number[] = [];
    let ans2: number[] = [];
    let set1 = new Set<number>([...nums1]);
    let set2 = new Set<number>([...nums2]);

    set1.forEach((val) => {
        if (!set2.has(val)) {
            ans1.push(val)
        }
    })


    set2.forEach((val) => {
        if (!set1.has(val)) {
            ans2.push(val)
        }
    })
    
    console.log([ans1, ans2]);
    return [ans1, ans2];
}
