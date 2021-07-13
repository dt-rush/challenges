const { freqAnalysis, makeSortedArray, summary } = require('./solution')

//s1 = 'sssaaabbbboooxx'
//s2 = 'sssaaabbboyyyzzzzz'

//s1 = "Are they here"
//s2 = "yes, they are here"

s1 = "looping is fun but dangerous"
s2 = "less dangerous than coding"

console.log(freqAnalysis(s1))
console.log(freqAnalysis(s2))

console.log(makeSortedArray(freqAnalysis(s1), freqAnalysis(s2)))

console.log(summary(makeSortedArray(freqAnalysis(s1), freqAnalysis(s2))))
