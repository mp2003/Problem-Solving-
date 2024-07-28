/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
    let arr = s.split(" ").map((el) => {
        let num = el.split("").filter((w) => !isNaN(w) && w.trim() !== '');
        return [Number(num), el.slice(0, el.length - 1)];





        
    });

    arr.sort((a, b) => a[0] - b[0]);
    // console.log(arr); 

    let ans = [];

    for (let a of arr) {
        ans.push(a[1]);
    }
    // console.log(ans);

    return ans.join(" ");
};