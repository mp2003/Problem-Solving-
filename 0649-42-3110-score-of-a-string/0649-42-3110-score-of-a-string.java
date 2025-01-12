class Solution {
    public int scoreOfString(String s) {
        int ans = 0;
        for (int i = 1; i < s.length(); i++) {
            int ascii = Math.abs(s.charAt(i) - s.charAt(i - 1));
            ans += ascii;
        }
        return ans;
        
    }
}