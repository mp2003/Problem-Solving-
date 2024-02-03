
var deleteNode = function (node) {
    if (node === null || node.next === null) {
        // Cannot delete the last node or a null node
        return;
    }

    // Copy the value of the next node to the current node
    node.val = node.next.val;

    // Skip the next node
    node.next = node.next.next;
};