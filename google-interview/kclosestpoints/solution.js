function d(p) {
    return Math.sqrt(p[0]*p[0] + p[1]*p[1])
}

function kClosestPoints(points, k) {
    points.sort((p1, p2) => {
        return d(p1) - d(p2)
    })
    return points.filter((x, i) => i < k)
}


// testing
points = [[1,3],[-2,2], [1, 1], [1, 3], [0, 1]]
k = 3
console.log(kClosestPoints(points, k))
