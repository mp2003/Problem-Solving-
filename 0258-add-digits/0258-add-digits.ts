function addDigits(num: number): number {

    if (num === 0)
        return 0;

    return 1 + ((num - 1) % 9);
};