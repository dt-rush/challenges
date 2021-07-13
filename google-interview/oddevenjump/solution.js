function insideOutArray(arr) {
    return arr.map((x, i) => ({x: x, i: i})).sort((a, b) => a.x - b.x)
}

function oddJump(insideOut, val) {
    candidates = insideOut.filter((o) => o.x <= val)
    return candidates.sort((a, b) => {
        diff = a.x - b.x
        if (diff !== 0) {
            return diff
        }
        return a.i - b.i
    })[0]
}

function evenJump(insideOut, val) {
    candidates = insideOut.filter((o) => o.x >= val)
    return candidates.sort((a, b) => {
        diff = a.x - b.x
        if (diff !== 0) {
            return diff
        }
        return a.i - b.i
    })[0]
}

function doJumps(insideOut, curr, jump=0, seen=new Set().add(curr)) {
    // exit true if solution found (we got to the last element)
    if (curr.i === insideOut.length - 1) {
        console.log('reached last element. success!')
        return true
    }
    next = undefined
    // even
    if (jump % 2 == 0) {
        // filter because we cannot jump to the element we're at
        next = evenJump(insideOut.filter((o) => o.i !== curr.i), curr.x)
    }
    // odd
    else if (jump % 2 == 1) {
        next = oddJump(insideOut.filter((o) => o.i !== curr.i), curr.x)
    }
    console.log('next: ' + JSON.stringify(next))
    // exit false if no valid jump
    if (!next) {
        console.log('no next available')
        return false
    }
    // exit false if cycle found
    if (seen.has(next.i)) {
        console.log('cycle found, terminating')
        return false
    }
    else {
        // if not seen before, this is valid, add to seen
        console.log('jumping to ' + next.i)
        seen.add(next.i)
    }
    console.log(next)
    return doJumps(insideOut, next, jump+1, seen)
}

function oddEvenJump(arr) {
    insideOut = insideOutArray(arr)
    n = 0
    for (let i = 0; i < arr.length; i++) {
        console.log('----------------------------')
        console.log('starting at ' + i)
        if (doJumps(insideOut, {x: arr[i], i: i})) {
            n++
        }
    }
    return n
}


// testing
console.log(oddEvenJump([10,13,12,14,15]))
