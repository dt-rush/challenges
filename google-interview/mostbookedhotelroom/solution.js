function mostBooked(bookingSeq) {
    counts = {}
    // iterate the booking sequence, updating the counts for each room
    for (booking of bookingSeq) {
        if (booking[0] === '+') {
            room = booking.split('+')[1]
            if (!counts[room]) {
                counts[room] = 1
            } else {
                counts[room]++
            }
        }
    }
    // sort the list by <count, lexicographic>
    // (first convert counts map to a list)
    list = Object.keys(counts).map((key) => ({room: key, count: counts[key]}))
    list = list.sort((a, b) => {
        diff = b.count - a.count
        if (diff !== 0) {
            return diff
        } else {
            return a.room.localeCompare(b.room)
        }
    })
    console.log(list)
    // return the first element
    return list[0].room
}



// testing
console.log(mostBooked(["+1A", "+3E", "-1A", "+4F", "-3E", "+3E"]) == '3E')
console.log(mostBooked(["+1A", "+3E", "-1A", "+4F", "+1A", "-3E", "+3E"]) == '1A')
