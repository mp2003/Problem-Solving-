function plusOne(digits: number[]): number[] {
    let num: bigint = BigInt(0);
    let pow = digits.length - 1;
    for (let i = 0; i < digits.length; i++) {
        num += BigInt(digits[i]) * BigInt(10n) ** BigInt(pow);
        pow--;
    }

    num = num + BigInt(1);
    return num.toString().split("").map(Number);
};