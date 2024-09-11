/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    let arr = []
    while (head != null) {
        arr.push(head.val);
        head = head.next;
    }
    arr.sort((a, b) => a - b);
    // console.log(arr);
    let dummy = new ListNode(-1)
    let current = dummy;
    for (let i = 0; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return dummy.next;
};