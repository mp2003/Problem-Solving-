/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = new Map();
    for (let str of strs) {
        let sortedStr = str.split("").sort().join("");
        if (map.has(sortedStr)) {
            map.get(sortedStr).push(str);
        } else {
            map.set(sortedStr, [str]);
        }
    }
    return Array.from(map.values());
};