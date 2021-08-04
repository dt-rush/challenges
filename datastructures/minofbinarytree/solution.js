function minOfBinaryTree(tree) {
    if (tree === null) {
        return undefined
    }
    if (tree.left !== null) {
        return minOfBinaryTree(tree.left)
    }
    else if (tree.left === null) {
        return tree.val
    }
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

console.log(minOfBinaryTree(tree)) // should be 1
