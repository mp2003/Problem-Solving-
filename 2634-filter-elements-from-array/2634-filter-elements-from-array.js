/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    let newArr = [];
    arr.forEach((val, i) => {
        val = arr[i];
        if (fn(val, i))
            newArr.push(val)
    })

    return newArr;
};