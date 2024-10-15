class Solution {
    public int finalValueAfterOperations(String[] operations) {
        int ans = 0;
        for ( String s :operations ){
            char ch = s.charAt(0);
            
            if(ch == 'X'){
                if(s.charAt(1)=='+')
                    ans++;
                else 
                    ans--;
            } else {
                if(ch =='+')
                    ans++;
                else 
                    ans--;
            }
        }
        return ans;
    }
}