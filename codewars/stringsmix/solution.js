function isLowerCase(c) {
  return c.toLowerCase() == c
}

function freqAnalysis(s) {
  chars = Array.from(s).filter(isLowerCase)
  freqMap = {}
  for (c of chars) {
    if (c in freqMap) {
      freqMap[c]++
    } else {
      freqMap[c] = 1
    }
  }
  for (key in freqMap) {
    if (freqMap[key] == 1) {
      delete(freqMap[key])
    }
  }
  return freqMap
}

function makeSortedArray(fmap1, fmap2) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  result = []
  // build array of objects
  for (c of alphabet) {
    result.push({
      'char': c,
      '1freq': fmap1[c] || 0,
      '2freq': fmap2[c] || 0
    })
  }
  // filter out entries with only zeroes
  result = result.filter(x => !(x['1freq'] == 0 && x['2freq'] == 0))
  // sort by freq, char
  result = result.sort((a, b) => {
    maxFreqA = Math.max(a['1freq'], a['2freq'])
    maxFreqB = Math.max(b['1freq'], b['2freq'])
    aIsEqual = a['1freq'] == a['2freq']
    bIsEqual = b['1freq'] == b['2freq']
    console.log('comparing ' + a['char'] + ' and ' + b['char'])
    if (maxFreqA == maxFreqB &&
      (
        (!aIsEqual && bIsEqual) || 
        (aIsEqual && !bIsEqual)
      )
    ) {
      console.log('condition1')
      return (a['1freq'] + a['2freq']) - (b['1freq'] + b['2freq'])
    }
    if (maxFreqA == maxFreqB) {
      console.log('condition2')
      return a['char'].localeCompare(b['char'])
    } else {
      console.log('condition3')
      return maxFreqB - maxFreqA
    }
  })
  return result
}

function summary(sortedArray) {
  entries = []
  for (obj of sortedArray) {
    // obj has format example: {'char': 'z', '1freq': 0, '2freq': 5}
    //
    // each entry in the string we are building
    // has format [symbol]:[c x freq],
    // with symbol being either 1, 2, or = according to maxfreq
    symbol = '='
    if (obj['1freq'] > obj['2freq']) {
      symbol = '1'
    } else if (obj['1freq'] < obj['2freq']) {
      symbol = '2'
    }
    entries.push(
      symbol
      + ':'
      + obj['char'].repeat(Math.max(obj['1freq'], obj['2freq']))
    )
  }
  return entries.join('/')
}

function mix(s1, s2) {
  return summary(makeSortedArray(freqAnalysis(s1), freqAnalysis(s2)))
}

module.exports = {
  freqAnalysis,
  makeSortedArray,
  summary
}
