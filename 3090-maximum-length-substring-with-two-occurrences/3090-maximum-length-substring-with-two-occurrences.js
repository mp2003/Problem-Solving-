/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function (s) {
    let map = new Map();
    let i = 0, j = 0, ans = 0;
    while (j < s.length) {
        map.set(s[j], (map.get(s[j]) || 0) + 1);
        if (map.get(s[j]) <= 2) {
            ans = Math.max(ans, j - i + 1);
        }
        else {
            while (map.get(s[j]) > 2) {
                map.set(s[i], map.get(s[i]) - 1);
                if (map.get(s[i]) == 0)
                    map.delete(s[i]);
                i++;
            }
        }
        j++;
    }
    return ans;
};