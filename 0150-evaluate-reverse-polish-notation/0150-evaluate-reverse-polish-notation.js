/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];
  for (let ch of tokens) {
    if (isNaN(ch)) {
      let num1 = stack.pop();
      let num2 = stack.pop();
      let ans = eval(`${num2} ${ch} ${num1}`);
      //   console.log(Math.ceil(ans));
      ans = ans >= 0 ? Math.floor(ans) : Math.ceil(ans);
      stack.push(Math.ceil(ans));
    } else stack.push(ch);
  }
//   console.log(stack[0]);

  return stack[0];
};