class Solution {
    public int maximumWealth(int[][] accounts) {
        int ans = 0;
        for (int arr[] : accounts) {
            // System.out.println(Arrays.toString(arr));
            int sum = 0;
            for (int num : arr) {
                sum += num;
            }
            ans = Math.max(ans, sum);
        }
        return ans;
    }
}