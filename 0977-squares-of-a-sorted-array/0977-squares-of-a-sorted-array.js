/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let sqArr = nums.map((num) => {
        return num * num;
    })

    sqArr = sqArr.sort((a, b) => { return a - b });
    return sqArr;
};