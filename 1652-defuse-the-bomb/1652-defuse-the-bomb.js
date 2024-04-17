/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
    if (k > 0) return caseOne(code, k);
    return caseTwo(code, k);
};


function caseOne(code, k) {
    const n = code.length;
    const res = [];
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = 1; j <= k; j++) {
            sum += code[(i + j) % n];
        }
        res.push(sum);
    }
    return res;
}
function caseTwo(code, k) {
    return caseOne(code.reverse(), -k).reverse();
}