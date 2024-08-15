/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function (s) {
    let stack = [], score = 0;
    for (let ch of s) {
        if (ch === "(") {
            stack.push(0);
        } else {
            let last = stack.pop();
            let currentScore = last === 0 ? 1 : 2 * last;
            stack.length === 0 ? score += currentScore :
                stack[stack.length - 1] += currentScore;
        }
    }
    return score;
};