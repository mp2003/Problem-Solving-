class Solution {
    public int numberOfEmployeesWhoMetTarget(int[] hours, int target) {
        int ans = 0;
        for ( int n : hours){
            if ( n >= target)
                ans++;
        }
        
        return ans;
    }
}