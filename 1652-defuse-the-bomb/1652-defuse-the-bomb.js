/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
    if (k > 0) return caseOne(code, k);
    return caseTwo(code, k);
};

let caseOne = (code, k) => {
    let res = [];
    for (let i = 0; i < code.length; i++) {
        let sum = 0;
        for (let j = 1; j <= k; j++) {
            sum += code[(i + j) % code.length];
        }
        res.push(sum);
    }
    return res;
}

let caseTwo = (code, k) => {
    return caseOne(code.reverse(), -k).reverse();
}