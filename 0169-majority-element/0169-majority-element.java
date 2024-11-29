class Solution {
    public int majorityElement(int[] nums) {
        int el = 0, count = 0;
        for (int i = 0; i < nums.length; i++) {

            if (count == 0) {
                el = nums[i];
                count = 1;
            } else {
                if (el == nums[i])
                    count++;
                else
                    count--;
            }
        }
        count = 0;
        for (int num : nums) {
            if (num == el)
                count++;
        }
        return count > nums.length / 2 ? el : -1;
    }
}