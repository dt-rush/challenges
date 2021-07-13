function generateBinary(length) {
    patterns = []
    for (let i = 0; i < Math.pow(2, length); i++) {
        pattern = []
        for (let bit = 0; bit < length; bit++) {
            pattern.push((i >> bit) % 2)
        }
        patterns.push(pattern)
    }
    return patterns
}



// testing
console.log(generateBinary(3))
