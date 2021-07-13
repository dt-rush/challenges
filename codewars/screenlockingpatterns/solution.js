// 'A', 'B', 'C'
// 'D', 'E', 'F'
// 'G', 'H', 'I'
// return the visit-able neighbors of `letter` given that
// `path` has been traversed
neighbors = (letter, path) => {
    arr = []
    switch (letter) {
        case 'A': arr = arr.concat(Array.from('BDEFH'))
            if (path.indexOf('B') !== -1)
                arr.push('C')
            if (path.indexOf('E') !== -1)
                arr.push('I')
            if (path.indexOf('D') !== -1)
                arr.push('G')
            break
        case 'B': arr = arr.concat(Array.from('ADGECFI'))
            if (path.indexOf('E') !== -1)
                arr.push('H')
            break
        case 'C': arr = arr.concat(Array.from('BEFDH'))
            if (path.indexOf('B') !== -1)
                arr.push('A')
            if (path.indexOf('E') !== -1)
                arr.push('G')
            if (path.indexOf('F') !== -1)
                arr.push('I')
            break
        case 'D': arr = arr.concat(Array.from('ABCEGHI'))
            if (path.indexOf('E') !== -1)
                arr.push('F')
            break
        case 'E': arr = arr.concat(Array.from('ABCDFGHI'))
            break
        case 'F': arr = arr.concat(Array.from('ABCEGHI'))
            if (path.indexOf('E') !== -1)
                arr.push('D')
            break
        case 'G': arr = arr.concat(Array.from('DEHBF'))
            if (path.indexOf('D') !== -1)
                arr.push('A')
            if (path.indexOf('E') !== -1)
                arr.push('C')
            if (path.indexOf('H') !== -1)
                arr.push('I')
            break
        case 'H': arr = arr.concat(Array.from('ADGECFI'))
            if (path.indexOf('E') !== -1)
                arr.push('B')
            break
        case 'I': arr = arr.concat(Array.from('HEFDB'))
            if (path.indexOf('H') !== -1)
                arr.push('G')
            if (path.indexOf('E') !== -1)
                arr.push('A')
            if (path.indexOf('F') !== -1)
                arr.push('C')
            break
    }
    s = arr.join('')
    for (letter of path) {
        s = s.replace(letter, '')
    }
    return Array.from(s)
}

// simple summing dfs
function dfs(length, position, path) {
    // return 1 path found if we got to the end
    if (length === path.length) {
        return 1
    }
    // return 0 paths if we have nowhere to go from here
    nei = neighbors(position, path)
    if (!nei.length) {
        return 0
    }
    // add up subpaths starting from here
    sum = 0
    for (n of nei) {
        sum += dfs(length, n, path + n)
    }
    return sum
}

function countPatternsFrom(start, length) {
    return dfs(length, start, start)
}

// testing
console.log(neighbors('A', ''))
console.log(neighbors('A', 'FEB'))

console.log(countPatternsFrom('D', 3))
console.log(countPatternsFrom('E', 4))
console.log(countPatternsFrom('E', 8))
