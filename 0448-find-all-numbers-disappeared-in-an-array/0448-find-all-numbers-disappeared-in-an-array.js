/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let map = new Map();
  let res = [];
  for (let num of nums) map.set(num, (map.get(num) || 0) + 1);

  for (let i = 1; i <= nums.length; i++) {
    if (map.get(i) === undefined) {
      res.push(i);
    }
  }
  return res;
};