/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
    let map = new Map();
    let count = 0;
    for (let num1 of nums1) {
        for (let num2 of nums2) {
            map.set((num1 + num2), (map.get(num1 + num2) || 0) + 1);
        }
    }
    // console.log(map);
    for (let num3 of nums3) {
        for (let num4 of nums4) {
            // console.log(-(num3 + num4))
            if (map.has(-(num3 + num4)))
                count += map.get(-(num3 + num4));
        }
    }
    return count;
};