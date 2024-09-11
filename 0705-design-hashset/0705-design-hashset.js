
var MyHashSet = function () {
    this.set = new Array();
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
    // let length = this.set.length;
    if (!this.set.includes(key)) {
        this.set.push(key);
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
    // console.log(this.set.indexOf(key));
    let i = this.set.indexOf(key);
    if (i !== -1) { this.set.splice(i, 1) }
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
    // console.log(this.set.includes(key));

    return this.set.includes(key);
};