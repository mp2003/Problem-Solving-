class Solution {
    public int[] plusOne(int[] digits) {
        int n = digits.length -1 ;
        for ( int i = n  ; i >=0 ; i--){
            int sum = digits[i] +1;

            if ( sum <= 9){
                digits[i]++ ;
                return digits;
            }
            digits[i]=0;
        }
        int res []= new int [n+2];
        res[0] = 1;
        return res;
    }
}