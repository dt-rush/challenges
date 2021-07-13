function minNumberDecreasingSubsequences(input) {

    seqs = []
    seqs.push([input[0]])
    for (let i = 1; i < input.length; i++) {
        inserted = false
        for (let j = 0; j < seqs.length; j++) {
            if (seqs[j][seqs[j].length-1] > input[i]) {
                seqs[j].push(input[i])
                inserted = true
                break
            }
        }
        // if couldn't insert anywhere, new seq
        if (!inserted) {
            seqs.push([input[i]])
        }
    }
    console.log(seqs)
    return seqs.length
}



input = [5, 2, 4, 3, 1, 6]
console.log(minNumberDecreasingSubsequences(input))
console.log('3')

input = [2, 9, 12, 13, 4, 7, 6, 5, 10]
console.log(minNumberDecreasingSubsequences(input))
console.log('4')

input = [1, 1, 1]
console.log(minNumberDecreasingSubsequences(input))
console.log('3')
