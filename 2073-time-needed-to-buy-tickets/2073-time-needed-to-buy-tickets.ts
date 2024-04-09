function timeRequiredToBuy(tickets, k) {
    let n = tickets.length;
    let time = 0;

    // If person k only needs one ticket, return the time to buy it
    if (tickets[k] === 1)
        return k + 1;

    // Continue buying tickets until person k buys all their tickets
    while (tickets[k] > 0) {
        for (let i = 0; i < n; i++) {
            // Buy a ticket at index 'i' if available
            if (tickets[i] !== 0) {
                tickets[i]--;
                time++;
            }

            if (tickets[k] === 0)
                return time;
        }
    }

    return time;
}
