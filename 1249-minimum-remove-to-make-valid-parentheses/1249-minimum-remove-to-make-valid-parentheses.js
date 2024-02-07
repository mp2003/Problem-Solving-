/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
    let stack = [];
    let charArray = s.split("");
    let ans = '';

    for (let index in charArray) {
        if (charArray[index] === '(') {
            stack.push(index);
        } else if (charArray[index] === ")") {
            if (stack.length === 0)
                charArray[index] = '.';
            else {
                stack.pop();
            }
        }
    }
    while (stack.length > 0) {
        charArray[stack.pop()] = '.';
    }
    for (let char of charArray) {
        if (char !== '.')
            ans += char;
    }

    return ans;
};