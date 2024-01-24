function addBinary(a: string, b: string): string {
    let num1 = BigInt(`0b${a}`);
    let num2 = BigInt(`0b${b}`)
    let result = num1 + num2;


    return result.toString(2);
};