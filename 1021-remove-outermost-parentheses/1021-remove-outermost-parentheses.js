/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let stack = [];
    let ans = '';
    for (let char of s) {
        if (char === '(') {
            if (stack.length > 0)
                ans += '(';
            stack.push(char);
        } else {
            stack.pop();
            if (stack.length > 0)
                ans += ')'
        }
    }
    return ans;
};