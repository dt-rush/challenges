function strippedLine(markers) {
  return function (line) {
    for (marker of markers) {
      ix = line.indexOf(marker)
      if (ix != -1) {
        line = line.substr(0, ix)
      }
    }
    return line.trim()
  }
}

function solution (input, markers) {
  return input.split('\n')
    .map(strippedLine(markers))
    .join('\n')
}


// testing
console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]))
