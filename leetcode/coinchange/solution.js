function minCoinsNeeded(coins, amount) {
    let coin = coins.length - 1
    let used = 0
    while (amount > 0) {
        if (amount >= coins[coin]) {
            used += Math.floor(amount / coins[coin])
            amount = amount % coins[coin]
        }
        coin--
    }
    return used
}





coins = [1,2,5]
amount = 11
console.log(minCoinsNeeded(coins, amount)) // should be 3
