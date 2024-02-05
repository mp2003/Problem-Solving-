/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    for (let ch of s) {
        if (ch === ')' || ch === ']' || ch === '}') {
            let lastch = stack.pop();
            if ((ch === ')' && lastch !== '(') ||
                (ch === '}' && lastch !== '{') ||
                (ch === ']') && lastch !== '[') {
                return false;
            }

        } else {
            stack.push(ch)
        
        }
    }

    console.log(stack);
    return stack.length === 0;
};
