function myAtoi(s: string): number {
    let i = 0;
    let sign = 1;
    let num = 0;

    while (i < s.length && s[i] === " ") {
        i++;
    }

    if (i < s.length && (s[i] === '+' || s[i] === '-')) {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }
    
    while (i < s.length && s[i] >= '0' && s[i] <= "9") {
        num = num * 10 + Number(s[i]);
        i++;
    }

    num *= sign;

    if (num < -2147483648)
        num = -2147483648;
    else if (num > 2147483647)
        num = 2147483647;

    return num;
};