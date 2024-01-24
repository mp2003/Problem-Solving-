function addDigits(num: number): number {
    if (num === 0) {
        return 0;
    }

    let str = num.toString();

    while (str.length > 1) {
        const digitSum = Array.from(str).reduce((acc, val) => acc + Number(val), 0);
        str = digitSum.toString();
    }

    return Number(str);
}