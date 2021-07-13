function lengthOfLinkedList(list) {
    node = list
    len = 0
    while (node !== null) {
        len++
        node = node.next
    }
    return len
}


// testing
list = {val: 1, next: {val: 2, next: {val: 3, next: null}}}
console.log(lengthOfLinkedList(list))

list = {val: 1, next: null}
console.log(lengthOfLinkedList(list))

console.log(lengthOfLinkedList(null))
