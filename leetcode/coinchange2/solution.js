function waysToMakeChange(amount, coins, coin=coins.length-1) {
    // can't make change with a coin that doesn't exist
    if (coin < 0) {
        return 0
    }
    // if we've used up amount to 0, we have made the change (one way)
    if (amount === 0) {
        return 1
    }
    // recursively explore the tree of choices to use a coin or not use a coin
    ways = 0
    // coin we're at fits into amount
    if (amount >= coins[coin]) {
        // use the coin (subtract from amount, stay on this coin)
        ways += waysToMakeChange(amount - coins[coin], coins, coin)
        // don't use the coin (use next smaller coin)
        ways += waysToMakeChange(amount, coins, coin - 1)
    }
    // coin we're at doesn't fit into amount (have to use smaller coin)
    else {
        // don't use the coin
        ways += waysToMakeChange(amount, coins, coin - 1)
    }
    return ways
}





// testing
amount = 5
coins = [1,2,5]
console.log(waysToMakeChange(amount, coins)) // should be 4
