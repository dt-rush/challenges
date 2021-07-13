function levelOfTree(tree, n) {
    startIndex = Math.pow(2, n - 1) - 1
    width = Math.pow(2, n - 1)
    return tree.slice(startIndex, startIndex + width)
}

function depthOfTree(tree) {
    return Math.floor(Math.log(tree.length) / Math.log(2)) + 1
}

function maxLevelSum(tree) {
    levelSums = []
    for (let i = 1; i <= depthOfTree(tree); i++) {
        levelSums.push({
            level: i,
            sum: levelOfTree(tree, i).reduce((sum, x) => sum + (x ? x : 0), 0)
        })
    }
    levelSums = levelSums.sort((a, b) => {
        diff = b.sum - a.sum
        if (diff !== 0) {
            return diff
        } else {
            return b.level - a.level
        }
    })
    return levelSums[0].level
}


// testing
console.log(maxLevelSum([1,7,0,7,-8,null,null]))
