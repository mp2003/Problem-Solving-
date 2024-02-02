/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {

    let prev: ListNode = null;
    let next: ListNode = null;
    let current: ListNode = head;

    if (current === null )
        return null;
    while (current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;

    }
    return prev;
};