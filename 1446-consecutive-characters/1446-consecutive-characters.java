class Solution {
    public int maxPower(String s) {
        int max = 1;
        int val = 1;
        for (int i = 0; i < s.length(); i++) {
            if (i > 0 && s.charAt(i - 1) == s.charAt(i)) {
            // System.out.println(s.charAt(i - 1) + " " + s.charAt(i));
                val++;
            } else {
                val = 1;
            }
            max = Math.max(max, val);
        }
        // System.out.println(Arrays.toString(power));
        return max;
    }
}
