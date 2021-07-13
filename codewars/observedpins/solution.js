const options = {
  0: [8],
  1: [2, 4],
  2: [1, 3, 5],
  3: [2, 6],
  4: [1, 5, 7],
  5: [2, 4, 6, 8],
  6: [3, 5, 9],
  7: [4, 8],
  8: [0, 5, 7, 9],
  9: [6, 8]
}

function blurred(observed) {
  return observed.map((x) => options[x].concat(x))
}

function increment(indexes, maxes) {
  let carry = 1
  for (let ix = indexes.length - 1; ix >= 0 && carry > 0; ix--) {
    indexes[ix] += carry
    carry = 0
    if (indexes[ix] == maxes[ix]) {
      indexes[ix] = 0
      carry = 1
    }
  }
  return indexes
}

function getPINs(observed) {
  blur = blurred(Array.from(observed))
  indexes = new Array(blur.length)
  for (let i = 0; i < indexes.length; i++) {
    indexes[i] = 0
  }
  nToGenerate = blur.reduce((product, x) => product * x.length, 1)
  pins = []
  for (let i = 0; i < nToGenerate; i++) {
    pin = []
    for (let j = 0; j < indexes.length; j++) {
      pin.push(blur[j][indexes[j]])
    }
    pins.push(pin)
    increment(indexes, blur.map(xs => xs.length))
  }
  return pins.map(pinseq => pinseq.reduce ((s, x) => s + x, '')).sort()
}



// testing
console.log(getPINs("11"))
