/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let str = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
//   console.log(str);
  return str === str.split("").reverse().join("");
};