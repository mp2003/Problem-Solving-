class Solution {
    public int trap(int[] height) {
        int n = height.length;
        int pr[] = new int[n];
        int su[] = new int[n];

        pr[0] = 0;
        for (int i = 1; i < n; i++) {
            pr[i] = Math.max(pr[i - 1], height[i - 1]);
        }

        su[n - 1] = 0;
        for (int i = n - 2; i >= 0; i--) {
            su[i] = Math.max(su[i + 1], height[i + 1]);
        }
        // System.out.println(Arrays.toString(pr));
        

        // System.out.println(Arrays.toString(su));

        int ans[] = new int[n];
        for (int i = 0; i < n; i++) {
            ans[i] = Math.max(0,Math.min(pr[i] ,su[i]) - height[i]);
        }

        int res = 0;
        for (int num : ans) {
            res += num;
        }
        return res;
    }
}