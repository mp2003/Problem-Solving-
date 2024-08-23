/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temp) {
    let stack = [0], ans = [];
    for (let i = 1; i < temp.length; i++) {
        while (stack.length !== 0 && temp[stack[stack.length - 1]] < temp[i]) {
            let index = stack.pop();
            ans[index] = i - index;
        }
        stack.push(i);
    }
    // console.log(stack)
    while (stack.length !== 0) {
        let i = stack.pop();
        ans[i] = 0;
    }
    return ans;
};