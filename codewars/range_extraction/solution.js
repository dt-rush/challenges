function isRange (list, i, diff = null) {
  console.log('checking if list at ' + i + ' is ' + diff)
  is = (i + 1 < list.length)
  if (is) {
    console.log('comparing ' + list[i] + ' and ' + list[i + 1])
    if (diff == null) {
      console.log('diff is null')
      is = is && (list[i + 1] - list[i] == 1
                  ||
                  list[i + 1] - list[i] == -1)
    } else {
      is = is && (list[i + 1] - list[i] == diff)
    }
  }
  return is
}

function solution(list) {
  tokens = []
  ranging = false
  diff = null
  start = null
  len = 0
  for (let i = 0; i < list.length; i++) {
    // not ranging
    console.log('@' + list[i])
    if (!ranging) {
      if (isRange(list, i, diff)) {
        console.log('found started range')
        diff = list[i + 1] - list[i]
        ranging = true
        start = list[i]
        len = 1
      }
      else {
        console.log('not ranging')
        tokens.push(list[i])
      }
    }
    // ranging
    else {
      if (isRange(list, i, diff)) {
        // continue
        console.log('in range')
        len++
      } else {
        // ended range
        console.log('ended range')
        if (len > 1) {
          tokens.push(start + '-' + list[i])
        } else {
          tokens.push(list[i-1])
          tokens.push(list[i])
        }
        // reset ranging state
        ranging = false
        diff = null
        len = 0
      }
    }
  }
  return tokens.join(',')
}

const list = [1,2,3,4,5,7,8,9]
console.log(isRange(list, 0, -1))

console.log(solution([1,2,3,4,5,7,8,9]))
console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))
