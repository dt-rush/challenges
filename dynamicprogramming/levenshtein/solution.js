// 1. recursive solution w substrings
function ld_r(a, b) {
    // base cases
    if (a === '') {
        return b.length
    }
    if (b === '') {
        return a.length
    }
    // explore tree of possible operations
    replaceCost = (a[a.length-1] === b[b.length-1]) ? 0 : 1
    return Math.min(
            // replace operation (make end chars =)
            // (0 cost if no replace needed)
            replaceCost
            + ld_r(
                a.substr(0, a.length-1),
                b.substr(0, b.length-1)
            ),
            // insert operation (insert matching end char to a)
            1 + ld_r(
                a,
                b.substr(0, b.length-1)
            ),
            // delete operation (delete char from a)
            1 + ld_r(
                a.substr(0, a.length-1),
                b
            )
    )
}

// 2. recursive memoized
function ld_rm(a, b, memo={}) {
    // return from memo if available
    if (memo[`${a},${b}`]) {
        return memo[`${a},${b}`]
    }
    // base cases
    if (a === '') {
        return b.length
    }
    if (b === '') {
        return a.length
    }
    // explore tree of possible operations
    replaceCost = (a[a.length-1] === b[b.length-1]) ? 0 : 1
    result = Math.min(
            // replace operation (make end chars =)
            // (0 cost if no replace needed)
            replaceCost
            + ld_rm(
                a.substr(0, a.length-1),
                b.substr(0, b.length-1),
                memo
            ),
            // insert operation (insert matching end char to a)
            1 + ld_rm(
                a,
                b.substr(0, b.length-1),
                memo
            ),
            // delete operation (delete char from a)
            1 + ld_rm(
                a.substr(0, a.length-1),
                b,
                memo
            )
    )
    // memoize result
    memo[`${a},${b}`] = result
    return result
}

// 3. dynamic programming table
// (dots to be filled)
// 					A	
// 			""	a	ad	adc
// 		""	0	1	2	3
// 		a	1	.	.	.	
// B	ab	2	.	.	
// 		abc	3	.	.	.
//
// element at i,j is the cost of converting A substr to B substr
// top row is cost of deletion til adc becomes ""
// left column is cost of insertion til "" becomes abc
function ld_dt(a, b) {
	// b.length+1 rows
	// a.length+1 columns
    dt = new Array(b.length+1).fill(0).map(_ => new Array(a.length+1).fill(0))
	// fill top row and left column
    for (let j = 0; j < a.length + 1; j++) {
        dt[0][j] = j
    }
    for (let i = 0; i < b.length + 1; i++) {
        dt[i][0] = i
    }
	// fill interior
	for (let i = 1; i < b.length + 1; i++) {
		for (let j = 1; j < a.length + 1; j++) {
			replaceCost = (a[j] === b[i]) ? 0 : 1
			dt[i][j] = Math.min(
				replaceCost + dt[i-1][j-1],
				1 + dt[i-1][j],
				1 + dt[i][j-1]
			)
		}
	}
    // return result to transform total string
	return dt[b.length][a.length]
}



// testing
a = 'Javascript'
b = 'Javaxxscript'
console.log(ld_r(a, b)) // should be 2 (inefficient, takes long)
console.log(ld_rm(a, b)) // should be 2
console.log(ld_dt(a, b)) // should be 2
