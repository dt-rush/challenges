function searchInBinaryTree(tree, x) {
    if (tree === null) {
        return false
    }
    if (x === tree.val) {
        return true
    }
    if (x > tree.val) {
        return searchInBinaryTree(tree.right, x)
    }
    else if (x < tree.val) {
        return searchInBinaryTree(tree.left, x)
    }
}





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

console.log(searchInBinaryTree(tree, 7)) // true
console.log(searchInBinaryTree(tree, 1)) // true
console.log(searchInBinaryTree(tree, 3)) // true
console.log(searchInBinaryTree(tree, 9)) // false
