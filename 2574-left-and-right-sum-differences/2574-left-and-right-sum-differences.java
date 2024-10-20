

class Solution {
    public int[] leftRightDifference(int[] nums) {
        int[] arr = new int[nums.length];
        int[] lSum = new int[nums.length];
        int[] rSum = new int[nums.length];
        int n = nums.length;
        for (int i = 1; i < n; i++) {
            lSum[i] = lSum[i - 1] + nums[i - 1];
        }

        for (int i = n - 2; i >= 0; i--) {
            rSum[i] = rSum[i + 1] + nums[i + 1];
        }

        for (int i = 0; i < n; i++) {
            arr[i] = Math.abs(lSum[i] - rSum[i]);
        }

        return arr;
    }
}