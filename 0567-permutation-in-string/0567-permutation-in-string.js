/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    let map = new Map();
    for (let ch of s1) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }
    let i = 0, j = 0, k = s1.length, count = map.size;
    while (j < s2.length) {
        if (map.has(s2[j])) {
            map.set(s2[j], map.get(s2[j]) - 1);
            if (map.get(s2[j]) === 0) {
                count--;
            }
        }

        if (j - i + 1 === k) {
            if (count === 0) return true;

            if (map.has(s2[i])) {
                map.set(s2[i], map.get(s2[i]) + 1);

                if (map.get(s2[i]) === 1) count++;
            }
            i++;
        }
        j++;
    }
    return false;
};