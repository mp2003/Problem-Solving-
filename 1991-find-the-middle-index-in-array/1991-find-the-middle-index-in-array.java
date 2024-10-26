class Solution {
    public int findMiddleIndex(int[] nums) {
        // int ans = -1;
        int[] lsum = new int[nums.length];
        int[] rsum = new int[nums.length];
        for (int i = 1; i < nums.length; i++) {
            lsum[i] = nums[i - 1] + lsum[i - 1];
        }
        for (int i = nums.length - 2; i >= 0; i--) {
            rsum[i] = nums[i + 1] + rsum[i + 1];
        }

        for ( int i =0 ; i< nums.length ; i++ ){
            if (lsum[i] == rsum[i])
                return i;
        }
        
        return -1;
    }
}