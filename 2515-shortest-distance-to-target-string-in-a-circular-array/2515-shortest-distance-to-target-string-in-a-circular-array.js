/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closetTarget = function (words, target, startIndex) {
    let i = startIndex;
    let j = startIndex;
    let steps = 0;
    let n = words.length;
    while (steps <= n) {
        if (words[i] === target || words[j] === target)
            return steps;
        else {
            i = (i + 1) % n;
            j = (j - 1 + n) % n;
        }
        steps++;
    }
    return -1;
};