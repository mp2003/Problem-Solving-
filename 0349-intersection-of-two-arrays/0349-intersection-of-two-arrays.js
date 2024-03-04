/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let res;
    if (nums1.length < nums2.length) {
        res = [...new Set(nums1)].filter((items) => {
            return nums2.indexOf(items) > -1;
        })
    } else {
        res = [...new Set(nums2)].filter((items) => {
            return nums1.indexOf(items) > -1;
        })
    }
     return res;
};