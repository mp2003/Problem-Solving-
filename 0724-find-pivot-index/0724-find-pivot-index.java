class Solution {
    public int pivotIndex(int[] nums) {
        int ans = -1;
        int[] lSum = new int[nums.length];
        int[] rSum = new int[nums.length];
        for (int i = 1; i < nums.length; i++) {
            lSum[i] = nums[i - 1] + lSum[i - 1];
        }
        for (int i = nums.length - 2; i >= 0; i--) {
            rSum[i] = nums[i + 1] + rSum[i + 1];
        }

        for (int i = 0; i < nums.length; i++) {
            if (lSum[i] == rSum[i]) {
                return i;
            }
        }
        return ans;
    }
}