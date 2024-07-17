/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let long = 0, len;
    let map = new Map();
    for (let num of nums) {
        map.set(num, true);
    }

    for (let num of nums) {
        if (!map.has(num - 1)) {
            len = 1;
            while (map.has(num + len)) {
                len += 1;
            }
                long = Math.max(len, long);

        }
    }

    console.log(map,len);
    return long;
};