/**
 * @param {string} sentence
 * @return {boolean}
 */

function splittingFirstAndLastChar(str) {
  let chArr = [];
  let arr = str.split(" ");
  for (let word of arr) {
    let firstCh = word[0];
    let lastCh = word[word.length - 1];
    let ch = [firstCh, lastCh];
    chArr.push(ch);
  }
  return chArr;
}
var isCircularSentence = function (str) {
  let arr = splittingFirstAndLastChar(str);
  console.log(arr);
  if (arr.length === 0) return false;

  let bool = false;
  console.log(arr.length);
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
    if (i != arr.length - 1) {
      if (
        arr[i][1] === arr[i + 1][0] &&
        arr[i][1].charCodeAt(0) === arr[i + 1][0].charCodeAt(0)
      )
        bool = true;
      else return false;
    } else if (i === arr.length - 1) {
      if (
        arr[i][1] === arr[0][0] &&
        arr[i][1].charCodeAt(0) === arr[0][0].charCodeAt(0)
      ) {
        bool = true;
        console.log(arr[i][1], arr[0][0], "...");
      } else return false;
    }
  }
  return bool;
};