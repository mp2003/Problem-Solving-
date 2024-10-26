class Solution {
    public int[] runningSum(int[] nums) {
        int[] ans = new int[nums.length];
        int sum = nums[0];
        ans[0] = sum;
        for (int i = 1; i < nums.length; i++) {
            sum += nums[i];
            ans[i] = sum;
        }
        return ans;
        
    }
}