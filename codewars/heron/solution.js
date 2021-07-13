function heron(a, b, c) {
    s = (a + b + c) / 2
    ans = Math.sqrt(s * (s - a) * (s - b) * (s - c))
    // round ans to 2 digits
    str = ans.toFixed(2)
    return parseFloat(str)
}

// testing
console.log(heron(3, 4, 5))
