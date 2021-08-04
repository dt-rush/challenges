function setChar(str, i, c) {
    return str.substr(0, i) + c + str.substr(i + 1, str.length)
}

function swapChar(str, i, j) {
    let ic = str[i]
    let jc = str[j]
    str = setChar(str, i, jc)
    str = setChar(str, j, ic)
    return str
}


/*
 * in-place reversal of words in a sentence
 *
 * "a flower has no reverse"
 * will become
 * "reverse no has flower a"
 *
 * in-place means we modify the string directly
 */
function reverseWordsInPlace(str) {
    // reverse string character by character
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        // swap ith element with (len - 1 - i)th element
        str = swapChar(str, i, str.length - 1 - i)
    }
    console.log(str)
    // now we have the words in reverse order, but they are 
    // themselves reversed. so note where each word is according
    // to where spaces are
    let words = []
    let i = 0
    while(i < str.length) {
        words.push(i)
        // continue til the next space
        while (str[i] !== ' ' && i < str.length) {
            i++
        }
        // continue til the first non-space
        while (str[i] === ' ' && i < str.length) {
            i++
        }
    }
    console.log(words)
    // reverse each word given its location
    for (ix of words) {
        // determine length of word
        len = 0
        while (str[ix + len] !== ' ' && ix + len < str.length) {
            len++
        }
        for (let i = 0; i < Math.floor(len/2); i++) {
            str = swapChar(str, ix + i, ix + (len - 1 - i))
        }
    }
    return str
}



// testing
s = 'a flower has no reverse'
console.log(reverseWordsInPlace(s)) // 'reverse no has flower a'
