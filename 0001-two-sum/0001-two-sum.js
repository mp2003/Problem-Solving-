/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = new Map();
    for (let i in nums) {
        map.set(nums[i], i);
    }

    for (let i in nums) {
        let comp = target - nums[i];
        if (map.has(comp) && map.get(comp) !== i) {
            return [i, map.get(comp)];
        }
    }
};