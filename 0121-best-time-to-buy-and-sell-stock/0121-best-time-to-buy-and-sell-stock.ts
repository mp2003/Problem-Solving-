function maxProfit(prices: number[]): number {
    let maxProfit: number = 0;
    let minPrice: number = Infinity;

    for (let i = 0; i < prices.length; i++) {
        minPrice = Math.min(prices[i], minPrice);
        maxProfit = Math.max(prices[i] - minPrice, maxProfit);
    }

    return maxProfit;
}
