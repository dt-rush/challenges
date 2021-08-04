function nearestNeighbors(list, person, k) {
    // sort the list and find the index of our person in it
    list = list.sort((a, b) => a - b)
    let i = list.indexOf(person)
    // select neighbors -k and +k from the list
    let neighbors = []
    for (let j = Math.max(0, i - k); j <= i + k && j < list.length; j++) {
        if (j === i) {
            continue
        }
        neighbors.push(list[j])
    }
    // choose the k nearest among the neighbors
    nearest = neighbors.sort((a, b) => Math.abs(person - a) - Math.abs(person - b))
    return nearest.slice(0, k)
}


// testing
people = [1, 3, 6, 7, 9, 11, 14, 15]
console.log(nearestNeighbors(people, 9, 3))
console.log(nearestNeighbors(people, 14, 3))
console.log(nearestNeighbors(people, 15, 3))
console.log(nearestNeighbors(people, 1, 3))
