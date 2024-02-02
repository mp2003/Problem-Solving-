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
var reverseList = function(head) {
    let prev = null;
    let next = null;
    let current = head;

    if ( current == null)
        return null;
    
    while (current!== null){
        next = current.next;
        current.next= prev;
        prev = current ;
        current = next;
    }
    return prev;
};