class Solution {
    public int numIdenticalPairs(int[] nums) {
        int ans = 0;
        for (int i = 0; i < nums.length; i++) {
            for (int j = 0; j < i; j++) {
                if ( nums [i] == nums[j])
                    ans++;
            }
        }
        return ans;
        
    }
}