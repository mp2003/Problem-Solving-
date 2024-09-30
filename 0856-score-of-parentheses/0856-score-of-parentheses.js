/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
    let stack = [];
    let score = 0;
    for ( let ch of s){
        if ( ch === ")"){
            let lastCh = stack.pop();
            let innerSc = lastCh === 0 ? 1 : 2 * lastCh;
            stack.length === 0 ? score += innerSc : stack[stack.length-1] += innerSc;
        } else {
            stack.push(0);
        }
    }
    return score;
};