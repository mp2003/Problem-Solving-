/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function (words) {
    let ans = 0;
    for (let i = 0; i < words.length - 1; i++) {
        let arr_i = Array.from(new Set(words[i])).sort().join("");
        for (let j = i + 1; j < words.length; j++) {
            let arr_j = Array.from(new Set(words[j])).sort().join("");
            if (arr_i === arr_j)
                ans++;
        }
    }
    return ans;
    
};