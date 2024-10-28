class Solution {
    public static long revNum(int num) {
        long rev = 0;
        int count = count(num);
        while (num != 0) {
            int rem = num % 10;
            rev += Math.pow(10, --count) * rem;
            num /= 10;
        }
        return rev;
    }
    static int count(long num) {
        int c = 0;
        while (num != 0) {
            num /= 10;
            c++;
        }
        return c;
    }

    public boolean isPalindrome(int x) {
        if (x < 0)
            return false;

        long rev = revNum(x);
        if (rev == x)
            return true;
        else
            return false;
    }
}