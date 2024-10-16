class Solution {
    public List<Integer> targetIndices(int[] nums, int target) {
        ArrayList<Integer> ans = new ArrayList<>();
        Arrays.sort(nums);
        for (int i = 0; i < nums.length; i++) {
            if(target == nums[i])
                ans.add(i);
        }
        return ans;
    }
}