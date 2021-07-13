// roses is an array of days on which roses bloom,
// where the rose at position i in the flowerbed row will
// bloom on day roses[i]
//
// k is bouqet size
// n is number of bouqets
//
//
function daysTilBouqets(roses, k, n) {
    // map roses to objects of {rose (index in the row), day}
    // then, sort these roses by day to bloom
    roses = roses
        .map((day, i) => ({position: i, day: day}))
        .sort((r1, r2) => r1.day - r2.day)

    day = 0
    // the current state of the row as:
    // n = not bloomed,
    // b = bloomed
    bloomed = Array.from('n'.repeat(roses.length))
    // since the roses are sorted by day now, we can iterate them
    // to wind time forward to each next blooming time
    for (rose of roses) {
        // the next rose blooms
        console.log('day:' + rose.day)
        // bloom the rose in the position in the row
        bloomed[rose.position] = 'b'
        // .join('') converts to string from array of chars
        // .match(new RegExp('b'.repeat(k) 'g')) does exactly the bouqet
        // gathering
        console.log('row: ' + bloomed.join(''))
        bouqets = bloomed
            .join('')
            .match(new RegExp('b'.repeat(k), 'g')) || []
        if (bouqets.length == n) {
            console.log(bouqets.length + ' bouqets: ')
            console.log(bouqets)
            return rose.day
        }
    }
}

// testing
roses = [1, 2, 4, 9, 3, 4, 1]
console.log(daysTilBouqets(roses, 2, 2)) // should be 4
