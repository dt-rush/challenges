function removeEven(arr) {
    out = []
    for (el of arr) {
        if (el % 2 == 0) {
            continue
        } else {
            out.push(el)
        }
    }
    return out
}



// testing
arr = [1,2,3,4,5,6,7,8]
console.log(removeEven(arr))
