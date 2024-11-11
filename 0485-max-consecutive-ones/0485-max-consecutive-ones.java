class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int max = Integer.MIN_VALUE;
        int val = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != 0) {
                val++;
            } else {
                val = 0;
            }
            max = Math.max(max, val);
        }
        return max;
    }
}