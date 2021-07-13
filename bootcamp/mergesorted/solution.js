function mergeSorted(xs, ys) {
    xi = 0
    yi = 0
    out = []
    for (let i = 0; i < xs.length + ys.length; i++) {
        if (yi == ys.length || xs[xi] < ys[yi]) {
            out.push(xs[xi])
            xi++
        } else {
            out.push(ys[yi])
            yi++
        }
    }
    return out
}


// testing
xs = [1,3,7,9,10]
ys = [2,4,5,6,8]
console.log(mergeSorted(xs, ys))
console.log(mergeSorted(ys, xs))
