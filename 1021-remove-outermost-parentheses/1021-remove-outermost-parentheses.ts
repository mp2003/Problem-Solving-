function removeOuterParentheses(s: string): string {
    let stack = [];
    let ans: string = "";
    for (let ch of s) {
        if (ch == '(') {
            if (stack.length !== 0)
                ans += ch;
            stack.push(ch);
        } else {
            stack.pop();
            if (stack.length !== 0)
                ans += ')';
        }
    }
    return ans;
};