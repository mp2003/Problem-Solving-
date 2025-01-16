class Solution {
    public String interpret(String str) {
        StringBuilder ans = new StringBuilder();
        for (int i = 0; i < str.length() - 1; i++) {
            if ( str.charAt(i) == 'G')
                ans.append('G');
            else {
                if (str.charAt(i + 1) == ')') {
                    ans.append('o');
                    i += 1;
                } else {
                    ans.append("al");
                    i += 3;
                }
            }
        }
        if (str.charAt(str.length() - 1) == 'G')
            ans.append('G');
        return ans.toString();
    }
}