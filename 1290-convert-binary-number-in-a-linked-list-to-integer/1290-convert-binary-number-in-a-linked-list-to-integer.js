/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
    let arr = [];

    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    console.log(arr)
    let ans = 0;
    for (let i = 0; i < arr.length; i++) {
        ans += arr[i] * Math.pow(2, arr.length - (i + 1));
    }
    return ans;
};