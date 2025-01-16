class Solution {
    public int mostWordsFound(String[] sentences) {
        int ans =0;
        for ( String str : sentences){
            String[] words = str.split(" ");
            System.out.println(Arrays.toString(words));
            ans = Math.max(ans, words.length);
        }

        return ans;
    }
}