function formatKey(s, k) {
    s = s.toUpperCase()
    allChars = s.replace(/-/g, '')
    // first group size is either remainder or a full group
    firstSplit = allChars.length % k
    if (firstSplit == 0) {
        firstSplit = k
    }
    // take chunks off of allChars until done
    output = []
    split = firstSplit
    while (allChars.length) {
        output.push(allChars.slice(0, split))
        console.log('key building: ' + output)
        // remove the chunk we added to output
        allChars = allChars.slice(split)
        console.log('remaining to add: ' + allChars)
        // (after the first chunk, split = k)
        split = k
    }
    return output.join('-')
}

s = '5F3Z-2e-9-w'
k = 4
console.log(formatKey(s, k))
console.log('5F3Z-2E9W')


s = '5F3Z-2e-9-w'
k = 3
console.log(formatKey(s, k))
console.log('5F-3Z2-E9W')

k = 7
console.log(formatKey(s, k))
console.log('5-F3Z2E9W')
