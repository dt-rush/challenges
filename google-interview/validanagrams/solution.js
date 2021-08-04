const fs = require('fs')

function loadDictionary(path) {
    let file = fs.readFileSync(path)
    let str = file.toString()
    let dictionary = str.split('\n')
    return dictionary
}

function validAnagrams(word, dictionary) {
    // convert dictionary into map
    // where keys are the string with characters in sorted order
    // and the value is a list of all words which are anagrams of that sorted key
    let map = {}
    let sortedWord = Array.from(word).sort().join('')
    for (w of dictionary) {
        sorted = Array.from(w.toLowerCase()).sort().join('')
        if (sorted !== sortedWord) {
            continue
        }
        if (map[sorted]) {
            map[sorted].push(w)
        } else {
            map[sorted] = [w]
        }
    }
    return map[sortedWord]
}



// testing
dictionary = loadDictionary(process.argv[2])
// for (let i = 1024; i < 1048; i++) {
//     console.log(dictionary[i])
// }

console.log(validAnagrams('education', dictionary))
