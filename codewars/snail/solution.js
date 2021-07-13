snail = function (array) {

  directions = [
    {x: 1, y: 0},
    {x: 0, y: 1},
    {x: -1, y: 0},
    {x: 0, y: -1}
  ]

  width = array[0].length
  height = array.length
  nVisited = 0
  nToVisit = width * height
  visitedPositions = {}
  position = { x: 0, y: 0 }
  directionIndex = 0

  haveVisited = (position) => {
    return (position.x + ',' + position.y) in visitedPositions
  }
  markVisited = (position) => {
    visitedPositions[position.x + ',' + position.y] = true
  }
  isValidMove = (position, direction) => {
    newPosition = {
      x: position.x + direction.x,
      y: position.y + direction.y
    }
    return (
      newPosition.x >= 0 && newPosition.x < width
      &&
      newPosition.y >= 0 && newPosition.y < height
      &&
      !haveVisited(newPosition)
    )
  }
  movePosition = (position) => {
    direction = directions[directionIndex]
    // if we hit the edge of the block or a previously-visited position,
    // rotate our heading
    if (!isValidMove(position, direction)) {
      directionIndex = (directionIndex + 1) % 4
      direction = directions[directionIndex]
    }
    position.x += direction.x
    position.y += direction.y
  }

  trail = []
  while (nVisited < nToVisit) {
    trail.push (array[position.y][position.x])
    nVisited++
    markVisited(position)
    movePosition(position, directionIndex)
  }
  return trail
}

console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]))
