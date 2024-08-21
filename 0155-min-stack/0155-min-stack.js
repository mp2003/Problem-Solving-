
var MinStack = function () {
    this.count = 0;
    this.count1 = 0;
    this.stack = [];
    this.min = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.stack[this.count] = val;
    this.count++;
    let min = this.count1 > 0 ? this.min[this.count1 - 1] : Infinity;
    
    if (val <= min) {
        this.min[this.count1] = val;
        this.count1++;
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    // if (this.count === 0) return undefined;
    this.count = this.count - 1;
    let res = this.stack[this.count];
    delete this.stack[this.count];

    if (res === this.min[this.count1 - 1]) {
        this.count1 = this.count1 - 1;
        delete this.min[this.count1];
    }
    return res;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.count - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    console.log(this.min)
    return this.min[this.count1 - 1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */