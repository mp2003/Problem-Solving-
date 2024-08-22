
var MinStack = function () {
    this.count = 0;
    this.stack = [];
    this.min = [];
    this.minCount = 0;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.stack[this.count] = val;
    this.count++;
    let min = this.minCount === 0 ? Infinity : this.min[this.minCount - 1];
    if (val <= min) {
        this.min[this.minCount] = val;
        this.minCount++;
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    let val = this.stack[this.count - 1];
    delete this.stack[this.count - 1];
    this.count = this.count - 1;
    if (val === this.min[this.minCount - 1]) {
        delete this.min[this.minCount - 1];
        this.minCount = this.minCount - 1;
    }
    return val;
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
    return this.min[this.minCount - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */