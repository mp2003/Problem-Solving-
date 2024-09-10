var resultsArray = function(queries, k) {
    const ans = [];
    const maxHeap = new MinPriorityQueue({ priority: x => -x });
    
    for (let i = 0; i < queries.length; i++) {
        const x = Math.abs(queries[i][0]);
        const y = Math.abs(queries[i][1]);
        const distance = x + y;
        maxHeap.enqueue(distance);
        
        if (maxHeap.size() > k) {
            maxHeap.dequeue();
        }
        
        if (maxHeap.size() < k) {
            ans.push(-1);
        } else {
            ans.push(maxHeap.front().element);
        }
    }
    
    return ans;
};
