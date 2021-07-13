function pickFruits(fruits, i) {
    picked = 1
    types = new Set().add(fruits[i])
    i++
    while (i < fruits.length && types.size <= 2) {
        if (!types.has(fruits[i])) {
            types.add(fruits[i])
            continue
        }
        picked++
        i++
    }
    return picked
}

function maxFruits(fruits) {
    maxPicked = 0
    for (let i = 0; i < fruits.length; i++) {
        maxPicked = Math.max(maxPicked, pickFruits(fruits, i))
    }
    return maxPicked
}




// testing

fruits = [1,2,1]
console.log(maxFruits(fruits))
// should be 3

fruits = [0,1,2,2]
console.log(maxFruits(fruits))
// should be 3

fruits = [1,2,3,2,2]
console.log(maxFruits(fruits))
// should be 4

fruits = [3,3,3,1,2,1,1,2,3,3,4]
console.log(maxFruits(fruits))
// should be 5
