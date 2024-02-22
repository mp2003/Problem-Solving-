/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
    let trustCount = Array(n + 1).fill(0);

    for (let i = 0; i < trust.length; i++) {
        let [a, b] = trust[i];
        trustCount[a]--;
        trustCount[b]++;
    }

    console.log(trustCount);
    for (let i = 1; i <= n; i++) {
        if (trustCount[i] == n - 1)
            return i ;
    }
    return -1;
};