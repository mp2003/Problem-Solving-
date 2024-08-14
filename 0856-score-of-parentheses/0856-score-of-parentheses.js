/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
        let score = 0, stack = [];

        for ( let ch of s){
             if ( ch === "(")
                stack.push(0);
         else {
            let last = stack.pop();
            let currentScore = last === 0 ? 1 : 2 * last;
            if (stack.length != 0)  stack[stack.length-1] += currentScore;
            else score += currentScore;
        }
    }
    return score;
};