/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let map = new Map();
    map.set('I', 1);
    map.set('V', 5);
    map.set('X', 10);
    map.set('L', 50);
    map.set('C', 100);
    map.set('D', 500);
    map.set('M', 1000);

    let arr = s.split("");
    let ans = 0;
    // console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (i >= 1 && map.get(arr[i - 1]) < map.get(arr[i])) {
            // console.log(arr[i], map.get(arr[i]), arr[i - 1], map.get(arr[i - 1]));
            ans += (map.get(arr[i]) - 2 * map.get(arr[i - 1]));
        } else {
            ans += map.get(arr[i]);
        }
    }
    return ans;
};