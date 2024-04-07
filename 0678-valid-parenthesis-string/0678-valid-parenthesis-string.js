/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
    let stack = [];
    let astreick = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(')
            stack.push(i);
        else if (s[i] === "*")
            astreick.push(i);
        else {
            if (stack.length > 0)
                stack.pop();
            else if (astreick.length > 0)
                astreick.pop();
            else
                return false;
        }
    }

    while (stack.length > 0 && astreick.length > 0) {
        if (stack[stack.length - 1] < astreick[astreick.length - 1]) {
            stack.pop();
            astreick.pop();
        } else {
            break;
        }
    }
    return stack.length === 0;
};