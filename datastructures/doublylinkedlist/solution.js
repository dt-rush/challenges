DoublyLinkedList = function() {
    return {

        len: 0,
        first: null,
        last: null,

        push: function(x) {
            if (this.len === 0) {
                this.first = {val: x, next: null, prev: null}
                this.last = this.first
            } else {
                let node = {val: x, next: null, prev: this.last}
                this.last.next = node
                this.last = node
            }
            this.len++
        },

        insert: function(x, i) {
            // iterate to the insert-position
            let next = this.first
            for (let j = 0; j < i && next !== null; j++) {
                next = next.next
            }
            // create the node
            let node = {
                val: x,
                next: next,
                prev: next === null ? this.last : next.prev
            }
            // update links
            if (next !== null) {
                next.prev = node
            }
            if (node.prev !== null) {
                node.prev.next = node
            }
            // update first/last
            if (i === 0) {
                this.first = node
            }
            if (i >= this.len) {
                this.last = node
            }
            if (this.len === 0) {
                this.first = node
            }
            // update len
            this.len++
        },

        pop: function() {
            let node = this.last
            if (node !== null) {
                this.last = node.prev
            }
            if (node.prev !== null) {
                node.prev.next = null
            }
            this.len = Math.max(0, this.len - 1)
            if (this.len === 0) {
                this.first = null
                this.last = null
            }
            return (node ? node.val : null)
        },

        delete: function(i) {
            if (this.len === 0) {
                return
            }
            // iterate to node at index i
            let node = this.first
            for (let j = 0; j < i && node !== null; j++) {
                node = node.next
            }
            // update links
            if (node.prev !== null) {
                node.prev.next = node.next
            }
            if (node.next !== null) {
                node.next.prev = node.prev
            }
            // update first and last
            if (i === 0) {
                this.first = node.next
            }
            if (i >= this.len) {
                this.last = node.prev
            }
            this.len--
        },

        toString: function() {
            s = '['
            let node = this.first
            while (node !== null) {
                s += node.val
                if (node.next !== null) {
                    s += ','
                }
                node = node.next
            }
            s += ']'
            return s
        },

        reversed: function() {
            let list = new DoublyLinkedList()
            let node = this.last
            while (node !== null) {
                list.push(node.val)
                node = node.prev
            }
            return list
        },

        indexOf: function(x) {
            let node = this.first
            for (let i = 0; i < this.len && node !== null; i++) {
                if (node.val === x) {
                    return i
                }
                node = node.next
            }
            return -1
        }
    }
}



// testing
l = new DoublyLinkedList();
l.push(1)
l.push(2)
l.push(3)
console.log(l.toString())

console.log('l.insert(0, 1)')
l.insert(0, 1)
console.log(l.toString())

console.log('insert(0, 0)')
l.insert(0, 0)
console.log(l.toString())

console.log('insert(0, 5)')
l.insert(0, 5)
console.log(l.toString())

console.log('insert(0, 5)')
l.insert(0, 5)
console.log(l.toString())
console.log('printing reverse')
console.log(l.reversed().toString())

console.log('delete at index 3')
l.delete(3)
console.log(l.toString())
console.log('printing reverse')
console.log(l.reversed().toString())

console.log('delete at index 0')
l.delete(0)
console.log(l.toString())
console.log('printing reverse')
console.log(l.reversed().toString())

console.log('pop:')
console.log(l.pop())
console.log(l.toString())

console.log('indexOf(3):')
console.log(l.indexOf(3))

console.log('indexOf(0):')
console.log(l.indexOf(0))

console.log('indexOf(10):')
console.log(l.indexOf(10))

console.log('l.push(10)...')
l.push(10)
console.log(l.toString())

console.log('indexOf(10):')
console.log(l.indexOf(10))
