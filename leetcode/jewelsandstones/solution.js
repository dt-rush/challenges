function jewelCount(jewels, stones) {
    count = 0
    for (jewel of jewels) {
        for (stone of stones) {
            if (stone === jewel) {
                count++
            }
        }
    }
    return count
}



jewels = "aA"
stones = "aAAbbbb"
console.log(jewelCount(jewels, stones)) // should be 3

jewels = "z"
stones = "ZZ"
console.log(jewelCount(jewels, stones)) // should be 0

