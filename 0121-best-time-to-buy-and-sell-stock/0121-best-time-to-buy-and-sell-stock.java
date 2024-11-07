class Solution {
    public int maxProfit(int[] prices) {
        int minVal = Integer.MAX_VALUE;
        int maxDiff = Integer.MIN_VALUE;

        for ( int i =0 ; i< prices.length ; i++){
            if ( prices[i] < minVal)
                minVal = prices[i];
            if(prices[i] - minVal > maxDiff)
                maxDiff = prices[i]- minVal;
        }
        return maxDiff;
    }
}