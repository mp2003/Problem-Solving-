function checkValidString(s: string): boolean {
    let stack: number[] = [];
    let asterick: number[] = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(')
            stack.push(i);
        else if (s[i] === '*')
            asterick.push(i);
        else {
            if (stack.length > 0)
                stack.pop();
            else if (asterick.length > 0)
                asterick.pop();
            else
                return false;
        }
    }

    while (stack.length > 0 && asterick.length > 0) {
        if (stack[stack.length - 1] < asterick[asterick.length - 1]) {
            stack.pop();
            asterick.pop()
        } else
            break;
    }

    return stack.length === 0;
};