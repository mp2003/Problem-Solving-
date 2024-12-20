class Solution {
    public String firstPalindrome(String[] words) {
        for ( String str : words){
            String rev = new StringBuilder(str).reverse().toString();
            // System.out.println(str + " "+ rev);
            if (str.equals(rev)){
                return str;
            }
        }

        return "";
    }
}