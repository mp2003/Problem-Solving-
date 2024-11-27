class Solution {
    public int peakIndexInMountainArray(int[] arr) {
        int i = 0, j = arr.length - 1, ans = 0;
        while (i < j) {
            int mid = (int)  (i + (j - i) / 2);
            if ( arr[mid] < arr[mid +1]){
                 i = mid +1 ;
            } else {
                j = mid;
            }
        }
        return i;
    }
}
