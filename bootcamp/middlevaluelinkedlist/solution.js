function lengthOfLinkedList(list) {
    node = list
    len = 0
    while (node !== null) {
        len++
        node = node.next
    }
    return len
}

function middleValueOfLinkedList(list) {
    len = lengthOfLinkedList(list)
    middle = Math.floor(len / 2)
    node = list
    for (let i = 0; i < middle; i++) {
        node = node.next
    }
    return node.val
}





// testing
list = {val: 1, next: {val: 2, next: {val: 3, next: null}}}
console.log(middleValueOfLinkedList(list))
