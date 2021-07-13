function reverseSentence(sentence) {
    return sentence.split(' ').reverse().join(' ')
}


// testing
sentence = "the quick brown dog jumped over the lazy fox"
console.log(reverseSentence(sentence))
