class Solution {
    public int maxWidthOfVerticalArea(int[][] points) {
        ArrayList<Integer> list = new ArrayList<>();
        for (int i = 0; i < points.length; i++) {
            list.add(points[i][0]);
        }
        Collections.sort(list);
        int maxDiff = 0;
        for (int i = 1; i < list.size(); i++) {
            int diff = Math.abs(list.get(i - 1) - list.get(i));
            maxDiff = Math.max(maxDiff, diff);
        }
        System.out.print(list);
        return maxDiff;
        
    }
}