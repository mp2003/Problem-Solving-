function maxDepth(s: string): number {
    let depth = 0, max = 0;
    let stack = [];
    for (let char of s) {
        if (char === '(')
            stack.push(char);
        if (char === ')') {
            stack.pop();
        }
        depth = stack.length > 0 ? stack.length : depth;
        max = Math.max(max, depth)
    }
    return max;
};