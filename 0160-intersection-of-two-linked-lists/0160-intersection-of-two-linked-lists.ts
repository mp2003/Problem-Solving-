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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {

    if (headA == null || headB == null)
        return null;

    let CurrentA: ListNode = headA;
    let CurrentB: ListNode = headB;

    while (CurrentA !== CurrentB) {
        CurrentA = CurrentA ? CurrentA.next : headB;
        CurrentB = CurrentB ? CurrentB.next : headA;
    }



    return CurrentA;
};