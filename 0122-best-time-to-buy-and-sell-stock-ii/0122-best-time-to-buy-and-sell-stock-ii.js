/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0;
    let min = Infinity;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < prices[i + 1]) {
            // console.log(i, prices[i]);

            min = prices[i];
            console.log(min);
            profit += prices[i + 1] - min;
        }
    }
    return profit;
};