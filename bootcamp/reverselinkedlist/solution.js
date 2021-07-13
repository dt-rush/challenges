function reverseLinkedList(list) {
    els = []
    node = list
    while (node !== null) {
        els.push(node.val)
        node = node.next
    }
    els = els.reverse()
    list = {}
    node = list
    for (let i = 0; i < els.length; i++) {
        node.val = els[i]
        if (i + 1 < els.length) {
            node.next = {}
        } else {
            node.next = null
        }
        node = node.next
    }
    return list
}



list = {val: 1, next: {val: 2, next: {val: 3, next: null}}}
console.log(JSON.stringify(reverseLinkedList(list)))
