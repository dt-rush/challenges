function createWorkArea(width, height) { 
  workArea = new Array(height)
  for (let i = 0; i < height; i++) {
    workArea[i] = new Array(width)
    for (let j = 0; j < width; j++) {
      workArea[i][j] = 0
    }
  }
  return workArea
}

function createBuffered(cells) {
  height = cells.length
  width = cells[0].length
  workArea = createWorkArea(width + 2, height + 2)
  for (let i = 0; i < height; ++i) {
    for (let j = 0; j < width; ++j) {
      workArea[1 + i][1 + j] = cells[i][j]
    }
  }
  return workArea
}

function evolve(cells) {
  console.log(cells)
  height = cells.length
  width = cells[0].length
  next = createWorkArea(width, height)
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      neighbors = [
        [1, 0], [1, 1], [0, 1],
        [-1, 1], [-1, 0], [-1, -1],
        [0, -1], [1, -1]
      ]
      tally = 0
      for (neighbor of neighbors) {
        if (i + neighbor[1] == -1
            || i + neighbor[1] == height
            || j + neighbor[0] == -1
            || j + neighbor[0] == width) {
          continue
        }
        if (cells[i + neighbor[1]][j + neighbor[0]]) {
          tally++
        }
      }
      if (tally < 2 || tally > 3) {
        next[i][j] = 0
      }
      if (cells[i][j] == 1 && (tally == 2 || tally == 3)) {
        next[i][j] = 1
      }
      if (cells[i][j] == 0 && tally == 3) {
        next[i][j] = 1
      }
    }
  }
  return next
}

function columnEmpty(cells, j) {
  return cells.reduce((sum, row) => sum + row[j], 0) == 0
}

function rowEmpty(cells, i) {
  return cells[i].reduce((sum, el) => sum + el, 0) == 0
}

function cropped(cells) {
  console.log(cells)
  height = cells.length
  width = cells[0].length
  // find a live cell
  left = 0
  right = width - 1
  up = 0
  down = height - 1
  // expand left while non-empty
  while (left < right && columnEmpty(cells, left)) {
    left += 1
  }
  // expand right while non-empty
  while (right > left && columnEmpty(cells, right)) {
    right -= 1
  }
  if (left == right) {
    return [[]]
  }
  // expand up while non-empty
  while (up < down && rowEmpty(cells, up)) {
    up += 1
  }
  // expand down while non-empty
  while (down > up && rowEmpty(cells, down)) {
    down -= 1
  }
  console.log('left ' + left + ' right ' + right + ' up ' + up + ' down ' + down)
  cropArea = createWorkArea(right - left + 1, down - up + 1)
  for (let i = up; i <= down; i++) {
    for (let j = left; j <= right; j++) {
      cropArea[i - up][j - left] = cells[i][j]
    }
  }
  return cropArea
}

function getGeneration (cells, generation) {
  for (let t = 0; t < generation; t++) {
    // create workArea (buffer of 0 on all sides)
    workArea = createBuffered(cells)
    // apply rules to workArea
    workArea = evolve(workArea)
    // cells = cropped workArea
    cells = cropped(workArea)
  }
  return cells
}

const glider =
  [[1,0,0],
   [0,1,1],
   [1,1,0]]

function display(cells) {
  dark = '░░'
  light = '▓▓'
  cells.forEach((row) => {
    console.log(row.map((x) => x == 0 ? dark : light).join(''))
  });
}


const twoGliders = [
  [1, 1, 1, 0, 0, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 1],
  [0, 1, 0, 0, 0, 1, 1, 1]
]

console.log(display(getGeneration(twoGliders, 1)))
