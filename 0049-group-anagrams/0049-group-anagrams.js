/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = new Map();

    for (let s of strs) {
        let sortedStr = s.split("").sort().join("");
        console.log(s, sortedStr);
        if (map.has(sortedStr)) {
            // console.log(s);
            map.get(sortedStr).push(s);
        } else
            map.set(sortedStr, [s]);

    }
    console.log(map);
    return Array.from(map.values());
};