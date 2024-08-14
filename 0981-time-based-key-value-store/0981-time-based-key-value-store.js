
var TimeMap = function () {
    this.map = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
    if (!this.map.has(key)) this.map.set(key, []);
    this.map.get(key).push([value, timestamp])
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
    if (!this.map.has(key)) return "";

    let val = this.map.get(key);
    let ans = "";
    let l = 0, r = val.length - 1;
    // console.log(val);
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (val[mid][1] <= timestamp) {
            ans = val[mid][0];
            l = mid + 1;
        } else r = mid - 1;
    }
    return ans;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */