/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
    let map = new Map();
    for (let [num, val] of nums1) {
        map.set(num, (map.get(num) || val))
    }

    for (let [num, val] of nums2) {
        if (map.has(num)) {
            map.set(num, map.get(num) + val);
        } else {
            map.set(num, map.get(num) || val)
        }
    }

    const sortedArray = Array.from(map.entries()).sort((a, b) => a[0] - b[0]);

    return sortedArray;
};