/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    console.log(s.length,s[0]);
    // if (s.length === 1 && s[0] !== " ") return 1;
    s = s.split("").reverse().join("");
    let c = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === " ") continue;
        else {
            c++;
            if (s[i + 1] == " " ) return c;

        }
    }
    return c;
};