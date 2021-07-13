function searchLinkedList(list, x) {
    for (let i = 0, node = list; node !== null; i++, node = node.next) {
        if (node.val === x) {
            return i
        }
    }
    return -1
}




list = {val: 1, next: {val: 2, next: {val: 3, next: null}}}
console.log(searchLinkedList(list, 3))
console.log(searchLinkedList(list, 2))
console.log(searchLinkedList(list, 1))
console.log(searchLinkedList(list, 4))

