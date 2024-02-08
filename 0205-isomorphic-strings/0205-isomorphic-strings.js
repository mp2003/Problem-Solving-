/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {

    let map = new Map();
    let revMap = new Map();
    // S->T
    for (let i in s) {
        if (map.has(s[i])) {
            if (t[i] !== map.get(s[i]))
                return false;
            else
                map.set(s[i], t[i]);

        } else {
            map.set(s[i], t[i])
        }
    }

    // T->S
    for (let i in t) {
        if (revMap.has(t[i])) {
            if (s[i] !== revMap.get(t[i]))
                return false;
            else
                revMap.set(t[i], s[i]);
        } else {
            revMap.set(t[i], s[i]);
        }
    }
    return true;
};