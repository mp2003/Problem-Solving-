/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let hs = haystack.split("");
    let n = needle.split("")
    for (let i = 0; i < hs.length; i++) {
        for (let j = 0; j < n.length; j++) {
            if (hs[i+ j] != n[j])
                break;
            if ( j === n.length -1)
                return i
        }
    }
    return -1;
};