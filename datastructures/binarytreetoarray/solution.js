function binaryTreeToArray(tree, arr=[], i=0) {
    if (tree == null) {
        return
    }
    arr[i] = tree.val
    binaryTreeToArray(tree.left, arr, 2*i + 1)
    binaryTreeToArray(tree.right, arr, 2*i + 2)
    return arr
}



// testing
tree = {
  "val": 4,
  "left": {
    "val": 2,
    "left": {
      "val": 1,
      "left": null,
      "right": null
    },
    "right": {
      "val": 3,
      "left": null,
      "right": null
    }
  },
  "right": {
    "val": 7,
    "left": {
      "val": 6,
      "left": null,
      "right": null
    },
    "right": {
      "val": 8,
      "left": null,
      "right": null
    }
  }
}

console.log(binaryTreeToArray(tree))
