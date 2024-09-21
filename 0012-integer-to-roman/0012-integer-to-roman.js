/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    let map = new Map();
    map.set(1000, 'M');
    map.set(900, 'CM');
    map.set(500, 'D');
    map.set(400, 'CD');
    map.set(100, 'C');
    map.set(90, 'XC');
    map.set(50, 'L');
    map.set(40, 'XL');
    map.set(10, 'X');
    map.set(9, 'IX');
    map.set(5, 'V');
    map.set(4, 'IV');
    map.set(1, 'I');

    let ans = '';
    
    for (let [value, symbol] of map) {
        while (num >= value) {
            ans += symbol;
            num -= value;
        }
    }
    
    return ans;
};