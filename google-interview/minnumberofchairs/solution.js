function minNumberOfChairs(S, E) {
    // create ordered list of start/end events tagged by who is starting/ending
    startEvents = S.map((t, i) => ({t, type: 'start', who: i}))
    endEvents = E.map((t, i) => ({t, type: 'end', who: i}))
    events = startEvents.concat(endEvents)
    sorted = events.sort((e1, e2) => e1.t - e2.t)
    // group by time
    // (lists of events happening at the same time)
    timeGrouped = sorted.reduce((lists, x) => {
        // if same time, add to current list
        if (lists[lists.length - 1][0].t == x.t) {
            lists[lists.length - 1].push(x)
        } else {
            // else push a new list for a new time
            lists.push([x])
        }
        return lists
    }, [[sorted[0]]])
    // iterate through time, adding and removing guests to the party
    party = new Set()
    maxChairs = 0
    for (time of timeGrouped) {
        // all events at this time occur
        for (e of time) {
            if (e.type === 'start') {
                party.add(e.who)
            }
            if (e.type === 'end') {
                party.delete(e.who)
            }
        }
        // keep track of chairs needed
        maxChairs = Math.max(maxChairs, party.size)
    }
    // the party is over
    // the highest number of chairs needed during the party will be output
    return maxChairs
}




// testing
S = [1, 2, 6, 5, 3]
E = [5, 5, 7, 6, 8]
console.log(minNumberOfChairs(S, E))
