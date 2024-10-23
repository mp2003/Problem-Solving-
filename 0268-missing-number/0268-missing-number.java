class Solution {
    public int missingNumber(int[] nums) {
        int n = nums.length;
        int sum = (n + 1) * n / 2;
        int arrSum = 0;
        for (int i = 0; i < n; i++) {
            arrSum += nums[i];
        }
        // System.out.println(sum + " " + arrSum);
        int diff = sum - arrSum;
        return diff;
    }
}