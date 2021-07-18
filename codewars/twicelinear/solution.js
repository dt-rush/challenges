/*
 *
 *
 * Consider a sequence u where u is defined as follows:

The number u(0) = 1 is the first one in u.
For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
There are no other numbers in u.
Example:
u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...

Task:
Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) of the ordered sequence u (ordered with < so there are no duplicates) .
*/

function dbl_linear(n) {
    seq = [1]
    yi = 0
    zi = 0
    for (let i = 0; i < n; i++) {
        y = 2 * seq[yi] + 1
        z = 3 * seq[zi] + 1
        if (y < z) {
            seq.push(y)
            yi++
        } else if (z < y) {
            seq.push(z)
            zi++
        } else {
            seq.push(y)
            yi++
            zi++
        }
        console.log(seq)
    }
    return seq[seq.length-1]
}


// testing
console.log(dbl_linear(10))
