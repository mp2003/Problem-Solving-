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

function removeZeroSumSublists(head: ListNode | null): ListNode | null {
    let dummy: ListNode = new ListNode();
    dummy.next = head;
    let Ps = 0;
    let map = new Map<number, ListNode>();
    map.set(Ps, dummy);
    while (head) {
        Ps += head.val;
        if (map.has(Ps)) {
            let to_delete = map.get(Ps).next, Sum = Ps;
            while (to_delete !== head) {
                Sum += to_delete.val;
                map.delete(Sum);
                to_delete = to_delete.next;
            }
            map.get(Ps).next = head.next;
        } else {
            map.set(Ps, head)
        }
        head = head.next;
    }

    return dummy.next;
};
