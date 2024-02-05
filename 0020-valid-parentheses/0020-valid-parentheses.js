var isValid = function(s) {

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
