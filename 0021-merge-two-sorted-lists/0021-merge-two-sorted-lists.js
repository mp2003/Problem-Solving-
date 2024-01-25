/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummyHead = new ListNode ();
    let currentHead= dummyHead;
    
    while ( list1!== null && list2!== null){
        
        if ( list1.val < list2.val){
            currentHead.next = list1;
            list1 = list1.next;
        }else {
            currentHead.next = list2;
            list2 = list2.next;
        }
        
        currentHead = currentHead.next;
    }
    
    if (list1 !== null){
        currentHead.next = list1;
    }
    if ( list2 !== null){
        currentHead.next = list2;
    }
    
    return dummyHead.next;
};