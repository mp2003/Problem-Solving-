var isValid = function(s) {
    if (s.length % 2 !== 0) {
        return false; // If the length is odd, the string is unbalanced
    }

    let stack = [];
    
    for (let ch of s) {
        switch (ch) {
            case ')':
                if (stack.pop() !== '(') return false;
                break;
            case '}':
                if (stack.pop() !== '{') return false;
                break;
            case ']':
                if (stack.pop() !== '[') return false;
                break;
            default:
                stack.push(ch);
        }
    }

    return stack.length === 0;
};
