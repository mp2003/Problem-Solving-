class Solution {
    public int[] productExceptSelf(int[] nums) {
        int pr[] = new int[nums.length];
        int su[] = new int[nums.length];
        pr[0] = 1;
        for (int i = 1; i < nums.length; i++) {
            pr[i] = pr[i - 1] * nums[i - 1];
        }
        su[nums.length - 1] = 1;
        for (int i = nums.length - 2; i >= 0; i--) {
            su[i] = su[i + 1] * nums[i + 1];
        }

        int res[] = new int[nums.length];
        for (int i = 0; i < nums.length; i++) {
            res[i] = pr[i] * su[i];
        }
        return res;
    }
}