class Solution {
    public int[] getSneakyNumbers(int[] nums) {
        ArrayList<Integer> list = new ArrayList<>();
        ArrayList<Integer> res = new ArrayList<>();

        for (int i = 0; i < nums.length; i++) {
            if (list.contains(nums[i]))
                res.add(nums[i]);
            else
                list.add(nums[i]);
        }
        System.out.println(list);

        int[] ans = new int[res.size()];
        for (int i = 0; i < res.size(); i++)
            ans[i] = res.get(i);
        return ans;
    }
}