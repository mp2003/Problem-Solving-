class Solution {
    public int countConsistentStrings(String allowed, String[] words) {

        int ans = 0;
        for (String str : words) {
            boolean bool = true;
            for (int i = 0; i < str.length(); i++) {
                char ch = str.charAt(i);
                int ind = allowed.indexOf(ch);
                if (ind == -1)
                    bool = false;
            }
            if (bool == true)
                ans++;
        }


        return ans;
    }
}