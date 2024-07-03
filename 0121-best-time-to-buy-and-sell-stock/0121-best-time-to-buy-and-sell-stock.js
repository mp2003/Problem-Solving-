/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxProfit = 0;
    let minPrice = Infinity;

    for (let price of prices) {
        minPrice = Math.min(price, minPrice);
        maxProfit = Math.max(price - minPrice, maxProfit);
    }

    return maxProfit;
};