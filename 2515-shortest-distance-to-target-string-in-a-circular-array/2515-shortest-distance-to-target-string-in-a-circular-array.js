/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closetTarget = function (words, target, sI) {
    let i = sI;
    let j = sI;
    let s = 0;
    let n = words.length;

    while (s <= n) {
        if (words[i] === target || words[j]===target)
            return s;
        else {
            j = (j + 1) % n;
            i = (i - 1 + n) % n;
        }
        s++;
    }
    return -1;
};