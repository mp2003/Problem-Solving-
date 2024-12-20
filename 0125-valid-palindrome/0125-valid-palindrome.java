class Solution {
    public boolean isPalindrome(String s) {
        StringBuilder str = new StringBuilder();
        for (int i = 0; i < s.length(); i++) {
            if (Character.isLetter(s.charAt(i))|| Character.isDigit(s.charAt(i))) {
                str.append(s.charAt(i));
            }
        }
        System.out.println(str.toString()); // Output: HelloWorld
        String clean = str.toString().toLowerCase();
        String rev =new StringBuilder (clean).reverse().toString().toLowerCase();
        return clean.equals(rev);
    }
}