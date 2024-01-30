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

function isPalindrome(head: ListNode | null): boolean {
    
    function findMiddle(node: ListNode | null): ListNode | null {
        let slow = node;
        let fast = node?.next;

        while (fast !== null && fast.next !== null) {
            slow = slow?.next;
            fast = fast.next.next;
        }

        return slow;
    }

    const reverse = function (node : ListNode | null ) : ListNode | null{
        let prev = null;
        let current = node;
        let next = null;
        
        while (current!==null){
            next = current.next;
            current.next = prev ;
            prev = current ;
            current = next;
        }
        
        return prev;
    }
    
    const compare = function ( list1 : ListNode | null, list2 :ListNode|null ):boolean{
        while (list1!==null && list2!==null){
            if (list1.val!== list2.val)
                return false ;
            list1 = list1.next;
            list2= list2.next;
        }
        return true;
    }
    
    if (!head || !head.next)
        return true ;
    
    let middle = findMiddle(head);
    let reverseList = reverse (middle);
    
    return compare (head , reverseList);
    
    
};