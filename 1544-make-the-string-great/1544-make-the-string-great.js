/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        let code = s[i].charCodeAt(0) ;
        // console.log(s[i] + " : " + code);
        if (stack.length === 0)
            stack.push(s[i]);
        else {
            // console.log(String.fromCharCode(code + 32))
            if (String.fromCharCode(code + 32) === stack[stack.length - 1]
                || String.fromCharCode(code - 32) === stack[stack.length - 1]) {
                // console.log("...");
                stack.pop();
            } else {
                stack.push(s[i]);
            }
        }
    }
    return stack.join("");
};