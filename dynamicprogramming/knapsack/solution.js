function knapsackNaive(weights, values, capacity, item=0) {
    if (item >= values.length) {
        return 0
    }
    let value = 0
    let using = -1
    let notUsing = -1
    // if can use item
    if (capacity - weights[item] >= 0) {
        using = values[item] + knapsackNaive(
            weights, 
            values, 
            capacity - weights[item],
            item + 1)
        notUsing = knapsackNaive(
            weights,
            values,
            capacity,
            item + 1)
    } else {
        // if can't use item
        notUsing = knapsackNaive(
            weights,
            values,
            capacity,
            item + 1)
    }
    value = Math.max(using, notUsing)
    return value
}

function knapsackNaiveMemoized(weights, values, capacity, item=0, memo={}) {
    if (memo[`${capacity},${item}`]) {
        return memo[`${capacity},${item}`]
    }
    if (item >= values.length) {
        return 0
    }
    let value = 0
    let using = -1
    let notUsing = -1
    // if can use item
    if (capacity - weights[item] >= 0) {
        using = values[item] + knapsackNaiveMemoized(
            weights, 
            values, 
            capacity - weights[item],
            item + 1,
            memo)
        notUsing = knapsackNaiveMemoized(
            weights,
            values,
            capacity,
            item + 1,
            memo)
    } else {
        // if can't use item
        notUsing = knapsackNaiveMemoized(
            weights,
            values,
            capacity,
            item + 1,
            memo)
    }
    value = Math.max(using, notUsing)
    memo[`${capacity},${item}`] = value
    return value
}

/*
 * we consider a 2d matrix where row i and column j
 * represents the max value obtainable by including
 * items up to i and capacity j. the size is
 * values.length + 1 rows and capacity + 1 columns.
 *
 * we fill the table initially with the first row and
 * first column ("base cases") and then for each cell,
 * perform a max operation over previous (already filled)
 * cells, until the bottom-right-most element
 * contains the overall solution to maximizing value
 * for the full set of items and the total capacity
 */
function knapsackDP(weights, values, capacity) {
    // create matrix and initialize base values
    mat = new Array(values.length+1).fill(0)
        .map(_ => new Array(capacity+1).fill(0))
    for (let i = 0; i < values.length+1; i++) {
        mat[i][0] = 0
    }
    for (let j = 0; j < capacity+1; j++) {
        mat[0][j] = 0
    }
    // fill interior of table
    for (let i = 1; i < values.length+1; i++) {
        for (let j = 1; j < capacity+1; j++) {
            let using = -1
            let notUsing = -1
            if (j - weights[i-1] >= 0) {
                using = values[i-1] + mat[i-1][j - weights[i-1]]
            }
            notUsing = mat[i - 1][j]
            mat[i][j] = Math.max(using, notUsing)
        }
    }
    // return maximal value
    return mat[mat.length-1][mat[0].length-1]
}




// testing
weights = [1, 2, 5, 10]
values = [2, 4, 8, 10]
t0 = process.hrtime.bigint()
console.log(knapsackNaive(weights, values, 10)) // should be 14
dt = process.hrtime.bigint() - t0
console.log('naive recursive took ' + Number(dt)/1e6 + ' ms')

weights = [1, 2, 5, 10]
values = [2, 4, 8, 10]
t0 = process.hrtime.bigint()
console.log(knapsackNaiveMemoized(weights, values, 10)) // should be 14
dt = process.hrtime.bigint() - t0
console.log('naive recursive memoized took ' + Number(dt)/1e6 + ' ms')

weights = [1, 2, 5, 10]
values = [2, 4, 8, 10]
t0 = process.hrtime.bigint()
console.log(knapsackDP(weights, values, 10)) // should be 14
dt = process.hrtime.bigint() - t0
console.log('DP took ' + Number(dt)/1e6 + ' ms')
