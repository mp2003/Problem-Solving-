/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let fmap = new Map();
    for (let num of nums1)
        fmap.set(num, (fmap.get(num) || 0) + 1);
    let fmap1 = new Map();
    for (let num of nums2)
        fmap1.set(num, (fmap1.get(num) || 0) + 1);
    console.log(fmap, fmap1);

    let ans = [];
    if (fmap.size > fmap1.size) {
        for (let [val2, freq2] of fmap1) {
            if (fmap.has(val2)) {
                let f = Math.min(freq2, fmap.get(val2));
                let arr = new Array(f).fill(val2);
                ans.push(...arr)
            }
        }
    } else {
        for (let [val, freq] of fmap) {
            if (fmap1.has(val)) {
                let f = Math.min(freq, fmap1.get(val));
                let arr = new Array(f).fill(val);
                ans.push(...arr);
            }
        }
    }
    console.log(ans);
    return ans;
};