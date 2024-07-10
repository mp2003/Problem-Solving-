/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
    let count = 0;
    let map = new Map();
    for (let a of nums1) {
        for (let b of nums2) {
            map.set(a + b, map.get(a + b) ? map.get(a + b) + 1 : 1);
        }
    }

    for (let a of nums3) {
        for (let b of nums4) {
            if (map.has(-(a + b))) {
                count += map.get(-(a + b));
            }
        }
    }

    return count ;
};