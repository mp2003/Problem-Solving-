/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let area = 0;
    let i = 0, j = height.length - 1;

    while (i < j) {
        let w = j - i;
        let h = Infinity;

        if (height[i] < height[j]) {
            h = height[i];
            i++;
        } else if (height[i] === height[j]) {
            h = height[i];
            if (i < j) {
                if (height[i + 1] > height[j - 1]) {
                    i++;
                } else {
                    j--;
                }
            }
        }
        else {
            h = height[j];
            j--;
        }

        // console.log("i", i, "j", j, "::", h, w, "area", area);
        area = Math.max(area, w * h);

    }

    return area;
};