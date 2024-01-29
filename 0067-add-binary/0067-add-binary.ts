function addBinary(a: string, b: string): string {
    let num1 : bigint = BigInt(`0b${a}`);
    let num2 : bigint = BigInt(`0b${b}`);

    return (num1+num2).toString(2);
};