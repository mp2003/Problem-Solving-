/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    let map = new Map(); //S->T
    let revMap = new Map(); //T->S

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i]) || revMap.has(t[i])) {
            if (s[i] !== revMap.get(t[i]) || t[i] !== map.get(s[i])) {
                return false;
            }

        } else {
            map.set(s[i], t[i]);
            revMap.set(t[i], s[i]);
        }
    }

    return true;
};