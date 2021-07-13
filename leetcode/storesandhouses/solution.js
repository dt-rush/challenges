function closestStores(houses, stores) {
    closest = new Array(houses.length)
    for (let i = 0; i < houses.length; i++) {
        house = houses[i]
        // sort stores by closest to house, smallest index
        sorted = stores.sort((a, b) => {
            aDist = Math.abs(house - a)
            bDist = Math.abs(house - b)
            if (aDist !== bDist) {
                return aDist - bDist
            } else {
                return a - b
            }
        })
        // pick the topmost element
        closest[i] = sorted[0]
    }
    return closest
}




// testing

houses = [5, 10, 17]
stores = [1, 5, 20, 11, 16]
console.log(closestStores(houses, stores))
// should be [5, 11, 16]
