/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    console.log(s);
    let map = new Map();
    for (let ch of s) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }
    let arr = Array.from(map);
    arr.sort((a, b) => b[1] - a[1]);
    console.log(arr);
    let res = "";
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i][1]);
        while (arr[i][1] > 0) {
            res += arr[i][0];
            arr[i][1]--;
        }
    }
    return res;
};