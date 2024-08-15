/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    let depth = 0;
    let stack = [];

    for (let ch of s) {
        if (ch === "(") {
            stack.push("(");
        } else if (ch === ")") {
            console.log(stack);
            depth = Math.max(depth, stack.length);
            stack.pop();
        }
    }
    return depth;
};