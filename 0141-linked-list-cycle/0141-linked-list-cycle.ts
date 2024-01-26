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

function hasCycle(head: ListNode | null): boolean {
    if (!head||!head.next)
            return false ;
    
    let slow : ListNode = head;
    let fast : ListNode = head.next;
    
    while ( slow !== fast){
        if (!fast || !fast.next)
            return false ;
        
        slow= slow.next;
        fast=fast.next.next;
        
    }
    
    return true ;
};