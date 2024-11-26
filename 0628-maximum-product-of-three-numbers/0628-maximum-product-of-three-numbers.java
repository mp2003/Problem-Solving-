class Solution {
    public int maximumProduct(int[] nums) {
        
        Arrays.sort(nums);
        for (int i = 0; i < nums.length / 2; i++) {
            int temp = nums[i];
            nums[i] = nums[nums.length - 1 - i];
            nums[nums.length - 1 - i] = temp;
        }
        System.out.println(Arrays.toString(nums));
        // int prod = 1;
        // int maxProd = Integer.MIN_VAL; 
        int max1 = nums[0] * nums[1] * nums[2];
        int max2 = nums[0] * nums[nums.length -1] * nums[nums.length -2];
        return Math.max(max1,max2);
    }
}