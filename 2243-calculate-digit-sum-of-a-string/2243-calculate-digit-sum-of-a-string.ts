function digitalSum(s: string): number {

    let sum = Array.from(s).reduce((acc, digit) => acc + Number(digit), 0);
    return sum;
}

function convtToStr(str: string[]): string {
    return str.reduce((acc, val) => { return acc = acc + digitalSum(val).toString() }, "");
}
function digitSum(s: string, k: number): string {
    while (s.length > k) {
        let result = [];

        for (let i = 0; i < s.length; i += k) {
            result.push(s.slice(i, i + k));
        }
        console.log('result:' + result)
        s = convtToStr(result);
        console.log(s)
    }

    return s;
}