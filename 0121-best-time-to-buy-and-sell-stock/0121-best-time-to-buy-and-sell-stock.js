/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let pr of prices) {
        minPrice = Math.min(minPrice, pr);
        maxProfit = Math.max(pr - minPrice, maxProfit);
    }

    return maxProfit;
};