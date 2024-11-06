class Solution {
    public int[] plusOne(int[] digits) {
        int c = 0, n = digits.length;
        for (int i = n - 1; i >= 0; i--) {
            int sum = digits[i] + 1;
            if (sum < 10) {
                digits[i]++;
                return digits;
            }
            digits[i]=0;
        }


        int ans[] = new int[n + 1];
        ans[0] = 1;
        return ans;
    }
}