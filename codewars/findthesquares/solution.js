const findSquares = num => {
    let i = 1
    for (let i = 1; i < 500000; i++) {
        sqA = i*i
        sqB = (i+1)*(i+1)
        if (sqB - sqA === num) {
            return `${sqB}-${sqA}`
        }
    }
};

// 9  -->  "25-16"
console.log(findSquares(9))
// 5  -->  "9-4"
console.log(findSquares(5))
// 7  -->  "16-9"
console.log(findSquares(7))
