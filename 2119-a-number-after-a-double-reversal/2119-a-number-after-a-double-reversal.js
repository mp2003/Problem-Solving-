/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function (num) {
  let r1 = Number(num.toString().split("").reverse().join(""));
  let r2 = Number(r1.toString().split("").reverse().join(""));

  console.log(r1, r2);
  return r2 === num;
};