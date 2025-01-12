class Solution {
    public int finalValueAfterOperations(String[] operations) {
        int ans = 0;
        for ( String str : operations){
            char ch = str.charAt(0);
            char ch1 = str.charAt(2);
            if (ch == '+' || ch1 =='+')
                ans++;
            else 
                ans--;
        }
        return ans;
    }
}