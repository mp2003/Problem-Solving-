/**
 * @param {number[]} colors
 * @return {number}
 */
var numberOfAlternatingGroups = function (colors) {
    let i = 0, j = 0;
    let count = 0;
    let arr = [];
    while (i < colors.length) {
        arr.push(colors[j]);

        if (arr.length === 3) {
            let a = arr[0], b = arr[1], c = arr[2];
            if ((a === 0 && b === 1 && c === 0) || (a === 1 && b === 0 && c === 1)) {
                count++;
            }

            arr.shift();
            i++;
        }
        j++;
        if (j === colors.length) j = 0;
    }
    return count;
};