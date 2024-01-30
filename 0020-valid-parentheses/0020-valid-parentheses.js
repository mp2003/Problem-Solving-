/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];

    for (let char of s) {
        if (char === ')' || char === ']' || char === '}') {
            let lastChar = stack.pop();

            if ((char === ')' && lastChar !== '(') ||
                (char === ']' && lastChar !== '[') ||
                (char === '}' && lastChar !== '{')) {
                return false; 
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0; 
};
