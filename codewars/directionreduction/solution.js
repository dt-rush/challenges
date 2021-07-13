function dirReduc(arr) {
  reductionsPerformed = 0
  do {
    reductionsPerformed = 0
    removedEnd = false
    newArr = []
    for (let i = 0; i < arr.length - 1; i++) {
      console.log('looking at ' + arr[i] + ' (' + i + ')')
      if (arr[i] == 'NORTH' && arr[i + 1] == 'SOUTH' 
         || arr[i] == 'SOUTH' && arr[i + 1] == 'NORTH'
         || arr[i] == 'EAST' && arr[i + 1] == 'WEST'
         || arr[i] == 'WEST' && arr[i + 1] == 'EAST') {
        reductionsPerformed++
        i += 1
        if (i == arr.length - 1) {
          removedEnd = true
        }
      } else {
        newArr.push(arr[i])
      }
    }
    if (!removedEnd) {
      newArr.push(arr[arr.length-1])
    }
    console.log(newArr)
    arr = newArr
  } while (reductionsPerformed > 0)
  return arr
}

module.exports = {
  dirReduc
}
