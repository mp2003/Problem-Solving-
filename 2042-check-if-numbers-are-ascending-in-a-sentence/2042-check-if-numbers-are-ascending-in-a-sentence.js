/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
    let numArr = [];
    let ans = true;
    s.split(" ").forEach((el) => {
        if (el !== " " && !isNaN(el)) numArr.push(Number(el));
    })
    console.log(numArr)

    for (let i = 0; i < numArr.length - 1; i++) {
        if (numArr[i] >= numArr[i + 1]) return false
        
    }

    return ans;
};