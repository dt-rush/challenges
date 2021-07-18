function binaryArrayToTree(arr, i=0) {
    if (i >= arr.length) {
        return null
    }
    let tree = {}
    tree.val = arr[i]
    tree.left = binaryArrayToTree(arr, 2*i + 1)
    tree.right = binaryArrayToTree(arr, 2*i + 2)
    return tree
}




// testing

//          4
//      2       7
//    1   3   6   8
//
arr = [4,2,7,1,3,6,8]
console.log(JSON.stringify(binaryArrayToTree(arr), undefined, 2))
