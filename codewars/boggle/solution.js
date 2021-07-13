function depthFirstSearch(board, word, i, x, y, seen) {
//   console.log(word, i, x, y, seen)
  const directions = [
    [-1, 1], [0, 1], [1, 1],
    [-1, 0],         [1, 0],
    [-1, -1], [0, -1], [1, -1]
  ]
  // false if outside the board
  if (x < 0 || x >= board[0].length
    || y < 0 || y >= board.length) {
    return false
  }
  // false if cursor isn't on the char we would expect
  if (board[y][x] != word[i]) {
    return false
  }
  // false if seen already
  if (seen.indexOf(`(${y},${x})`) !== -1) {
    return false
  }
  // true if word complete
  if (i == word.length - 1 && board[y][x] == word[i]) {
    return true
  }
  seen += `(${y},${x})`
  for (d of directions) {
    if (depthFirstSearch(board, word, i+1, x + d[0], y + d[1], seen)) {
      return true
    }
  }
}

function checkWord(board, word) {
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[0].length; x++) {
      if (depthFirstSearch(board, word, 0, x, y, '')) {
        return true
      }
    }
  }
  return false
}

board = [
  ['E', 'A', 'R', 'S'],
  ['B', 'T', 'X', 'G'],
  ['F', 'A', 'U', 'A'],
  ['E', 'H', 'G', 'P'],
]

for(line of board) {
  console.log(line)
}
console.log('EARS in board? ' + checkWord(board, 'EARS'))
console.log('FEAT in board? ' + checkWord(board, 'FEAT'))
console.log('GUAP in board? ' + checkWord(board, 'GUAP'))
console.log('FOOT in board? ' + checkWord(board, 'FOOT'))

board = [
  ["I","L","A","W"],
  ["B","N","G","E"],
  ["I","U","A","O"],
  ["A","S","R","L"] 
]
for(line of board) {
  console.log(line)
}
console.log('BINGO in board? ' + checkWord(board, 'BINGO'))
console.log('LINGO in board? ' + checkWord(board, 'LINGO'))
