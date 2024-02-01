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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let dummy: ListNode = new ListNode(0);
    let prev: ListNode = dummy;
    dummy.next = head;
    while (head !== null) {
        let isPresent: boolean = false;
        while (head.next !== null && (head.val === head.next.val)) {
            head = head.next;
            isPresent = true;
        }
        if (isPresent) {
            prev.next = head.next;
        } else {
            prev = prev.next;
        }

        head = head.next;
    }
    return dummy.next;
};