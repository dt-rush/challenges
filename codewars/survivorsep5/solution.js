// converts
//
//     ["axz", "tb", "ch", "  gt"]
//
// to
//
//     [
//       [ 'a', 'x', 'z', ' ' ],
//       [ 't', 'b', ' ', ' ' ],
//       [ 'c', 'h', ' ', ' ' ],
//       [ ' ', ' ', 'g', 't' ]
//     ]
function rectArrPadded(arr) {
    rows = arr.length
    columns = arr.reduce(
        (max, s) => (s.length > max) ? s.length : max,
        0)
    rect = new Array(rows).fill(0).map(_ => new Array(columns).fill(0))
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (j < arr[i].length) {
                rect[i][j] = arr[i][j]
            } else {
                rect[i][j] = ' '
            }
        }
    }
    return rect
}

// whether a given coordinate (i, j) is in a group
// (list of 2-element arrays)
function inGroup(group, i, j) {
    for (coord of group) {
        if (coord[0] === i && coord[1] === j) {
            return true
        }
    }
    return false
}

// whether a given coordinate is in any of a list of groups
function inAnyGroup(groups, i, j) {
    for (group of groups) {
        if (inGroup(group, i, j)) {
            return true
        }
    }
    return false
}

// depth first search to expand from a starting coordinate and
// add all elements to the group which can be reached by
// vertical and horizontal jumps
function expandGroup(rect, i, j, group=[], seen=new Set()) {
    // add this coord to the group
    group.push([i, j])
    // note that it has been seen
    seen.add(`${i},${j}`)
    // we can hop vertically or horizontally to expand a group
    directions = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1]
    ]
    for (d of directions) {
        // invalid next step if out of bounds
        if (i + d[0] < 0
            || i + d[0] >= rect.length
            || j + d[1] < 0
            || j + d[1] >= rect[0].length) {
            continue
        }
        // invalid next step if space or already seen
        if (rect[i + d[0]][j + d[1]] !== ' '
            && !seen.has(`${i + d[0]},${j + d[1]}`)) {
            // recurse from this valid point
            expandGroup(rect, i + d[0], j + d[1], group, seen)
        }
    }
    return group
}

// extract the groups of contiguous elements according to vertical and
// horizontal jumping rules from the rectangular array
function parseGroups(rect) {
    groups = []
    // try to expand a group from each coordinate
    for (let i = 0; i < rect.length; i++) {
        for (let j = 0; j < rect[0].length; j++) {
            // don't expand groups from space characters
            if (rect[i][j] === ' ') {
                continue
            }
            // don't expand group if this starting point is already in
            // a group
            if (inAnyGroup(groups, i, j)) {
                continue
            }
            // else, create and push a group expanded from this starting point
            group = expandGroup(rect, i, j)
            groups.push(group)
        }
    }
    return groups
}


function eliminationsFromGroup(rect, group) {
    // build 2d array (matrix) of values (all 0)
    matrix = new Array(rect.length).fill(0).map(_ => new Array(rect[0].length).fill(-1))
    // for coord of group, fill with group.length
    for (coord of group) {
        matrix[coord[0]][coord[1]] = group.length
    }
    // function to recursively "descend" values into the matrix
    //
    // for example, given the rect of:
    //
    // [ 'a', 'x', 'z', ' ' ]
    // [ 't', 'b', ' ', ' ' ]
    // [ 'c', 'h', ' ', ' ' ]
    // [ ' ', ' ', 'g', 't' ]
    //
    // we will fill out:
    //
    // [ 7, 7, 7, 6 ]
    // [ 7, 7, 6, 6 ]
    // [ 7, 7, 6, 5 ]
    // [ 6, 6, 6, 5 ]
    fill = function(matrix, i, j, range) {
        if (range < 0) {
            return
        }
        // chebyshev distance
        directions = [
            [1, 0],
            [1, 1],
            [0, 1],
            [-1, 1],
            [-1, 0],
            [-1, -1],
            [0, -1],
            [1, -1]
        ]
        for (d of directions) {
            // prevent out-of-bounds movement
            if (i + d[0] < 0
                || i + d[0] >= rect.length
                || j + d[1] < 0
                || j + d[1] >= rect[0].length) {
                continue
            }
            // set value and recurse
            if (matrix[i + d[0]][j + d[1]] < range) {
                matrix[i + d[0]][j + d[1]] = range - 1
                fill(matrix, i + d[0], j + d[1], range - 1)
            }
        }
    }
    // recursively fill values by "descent"
    for (coord of group) {
        fill(matrix, coord[0], coord[1], group.length)
    }
    console.log('range-reached matrix:')
    for (row of matrix) {
        console.log(row)
    }

    // gather as eliminated, all squares with non-space character where
    // the number in the corresponding cell is >= 0 (was reached)
    eliminated = new Set()
    for (let i = 0; i < rect.length; i++) {
        for (let j = 0; j < rect[0].length; j++) {
            if (!inGroup(group, i, j)
                && matrix[i][j] >= 0 
                && rect[i][j] !== ' ') {
                eliminated.add(`${i},${j}`)
            }
        }
    }
    return eliminated
}




// parse groups from the rectangular array, perform eliminations, and gather
// the survivors
function survivors(arr) {
    console.log('-------------------------------------------------')
    // create 2d arr with spaces filled in
    rect = rectArrPadded(arr)
    console.log('rect: ')
    for (row of rect) {
        console.log(row)
    }
    // get groups from 2d array
    groups = parseGroups(rect)
    console.log('groups: ')
    for (group of groups) {
        console.log(group)
    }
    // eliminations is a list of coordinates to eliminate
    eliminations = []
    for (group of groups) {
        console.log('eliminating for group: ' + group)
        eliminations = new Set([
            ...eliminations,
            ...eliminationsFromGroup(rect, group)
        ])
        console.log(eliminations)
    }
    // perform eliminations
    for (elim of eliminations) {
        [i, j] = elim.split(',')
        rect[i][j] = ' '
    }
    // extract survivors
    surv = []
    for (let i = 0; i < rect.length; i++) {
        for (let j = 0; j < rect[0].length; j++) {
            if (rect[i][j] !== ' ') {
                surv.push(rect[i][j])
            }
        }
    }
    // return survivors as a string
    return surv.join('')
}



// testing
arr = ["axz", "tb", "ch", "  gt"]
console.log(survivors(arr))

// console.log(survivors(arr))

// arr = ["a", "b", "  d"]
// console.log(survivors(arr))

arr = ["xxxx xxxxx xx", "xxxxxxxxxxxx", "xxx xxxx xx"]
console.log(survivors(arr))
