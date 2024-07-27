/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
    let ans = s.split(" ").filter((el) => {
        return !isNaN(el);
    })

    console.log(ans);

    for (let i = 0; i < ans.length - 1; i++) {
        if (Number(ans[i]) >= Number(ans[i + 1]))
            return false;
    }

    return true;
};