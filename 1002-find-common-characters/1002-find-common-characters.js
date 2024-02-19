/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
    let charCount = Array(26).fill(Infinity);
    for (let i = 0; i < words.length; i++) {
        let currentCharCount = Array(26).fill(0);
        for (let char of words[i]) {
            currentCharCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        for (let k = 0; k < 26; k++) {
            charCount[k] = Math.min(currentCharCount[k], charCount[k]);
        }
    }
    let result = [];
    for (let i = 0; i < 26; i++) {
        for (let j = 0; j < charCount[i]; j++) {
            result.push(String.fromCharCode(i + 'a'.charCodeAt(0)));
        }
    }
    return result;
};