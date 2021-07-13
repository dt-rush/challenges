function addArrays(array1, array2) {
    if (array1.length != array2.length) {
        throw new Error('not equal lengths!')
    }
    return array1.map((x, i) => x + array2[i])
}
