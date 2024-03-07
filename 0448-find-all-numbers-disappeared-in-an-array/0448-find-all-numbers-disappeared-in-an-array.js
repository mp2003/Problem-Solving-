/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  nums.sort((a, b) => a - b);
  let set = new Set([...nums]);
  console.log(set);
  let res = [];
  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) {
      res.push(i);
    }
  }
  return res;
};