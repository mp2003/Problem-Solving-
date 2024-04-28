/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (s) {
    for (let i = 0; i < s.length; i++) {
        if (i != s.length - 1) {
            if (s[i] === " ") {
                if (s[i + 1] !== s[i - 1])
                    return false;
            }
        } else {
            if (s[s.length - 1] !== s[0])
                return false;
        }
    }
    return true;
};