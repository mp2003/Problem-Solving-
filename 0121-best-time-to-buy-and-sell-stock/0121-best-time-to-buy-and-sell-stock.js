/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0;
    let min = Infinity;
    for (let price of prices) {
        min = Math.min(min, price)
        profit = Math.max(profit, price - min);
    }
    return profit;
};