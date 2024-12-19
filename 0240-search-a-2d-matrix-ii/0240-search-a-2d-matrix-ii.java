class Solution {
    public boolean searchMatrix(int[][] mat, int target) {
        int m = mat.length;
        int n = mat[0].length;
        for (int arr[] : mat) {
            int i = 0, j = n - 1;
            while (i <= j) {
                int mid = (i + j) / 2;
                // System.out.println(mid);
            
                if (arr[mid] > target)
                    j= mid-1;
                else if (arr[mid] < target)
                    i= mid+1;
                else {
                    return true;
                }
            }
        }
        return false;
    }
}