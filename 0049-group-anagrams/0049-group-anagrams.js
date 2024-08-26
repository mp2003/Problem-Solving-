/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = new Map();
    for (let str of strs) {
        let sortedStr = str.split("").sort().join("");
        if (!map.has(sortedStr)) {
            map.set(sortedStr, [str]);
        } else
            map.get(sortedStr).push(str);
        // map.set(sortedStr, arr.push(str));
    }
    // console.log(map);
    return Array.from(map.values());
};