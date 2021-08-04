function printSubLists(A, width) {
    let sublists = A.reduce((lists, el, i) => {
        if (i % width === 0) {
            lists.push([el])
        } else {
            lists[lists.length-1].push(el)
        }
        return lists
    }, [])
    for(list of sublists) {
        console.log(list)
    }
}

function bottomUpMerge(A, start, mid, end, B) {
    i = start
    j = mid
    for (let k = start; k < end; k++) {
        if (i < mid && (A[i] < A[j] || j >= end)) {
            B[k] = A[i]
            i++
        } else {
            B[k] = A[j]
            j++
        }
    }
    return B
}

function bottomUpMergeSort(A, B, n) {
    for (let width = 1; width < n; width = 2 * width) {
        console.log(`width = ${width}\tsublists:`)
        printSubLists(A, width)
        for (let i = 0; i < n; i = i + 2 * width) {
            bottomUpMerge(
                A,
                i,
                Math.min(i+width, n),
                Math.min(i+2*width, n),
                B);
        }
        A = B.slice()
    }
    return A
}

function mergeSort(A) {
    return bottomUpMergeSort(A, A.slice(), A.length)
}


// arr = [7, 3, 5]
// copy = arr.slice()
// console.log(bottomUpMerge(arr, 0, 1, 3, copy))
// 
// arr = [1, 3, 5, 7, 2, 4, 6, 8]
// copy = arr.slice()
// console.log(bottomUpMerge(arr, 0, 4, 8, copy))

arr = [4, 3, 8, 7, 2, 1, 6, 5]
console.log(mergeSort(arr))
