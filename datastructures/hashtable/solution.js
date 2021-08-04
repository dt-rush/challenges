/* requires the inserted objects to provide .toString() and .equals() */
const DEFAULT_HASH_TABLE_SZ = 8
HashTable = function() {
    return {

        sz: DEFAULT_HASH_TABLE_SZ,

        arr: new Array(DEFAULT_HASH_TABLE_SZ).fill(0).map(_ => []),

        hash: function(o) {
            let str = o.toString()
            
            // compute hash
            let i = 0
            const p = 97
            for (let j = 0; j < str.length; j++) {
                i += str.charCodeAt(j) * Math.pow(p, j)
            }
            i %= this.sz
            return i
        },

        insert: function(o) {
            let i = this.hash(o)
            let bucket = this.arr[i]
            let already = false
            for (let j = 0; j < bucket.length; j++) {
                if (bucket[j].equals(o)) {
                    already = true
                }
            }
            if (!already) {
                bucket.push(o)
            }
        }
    }
}


// testing

// simple k-v toString()
Object.prototype.toString = function() {
    // special case for degenerate toString on objects
    let str = ''
    for (key of Object.keys(this)) {
        str += `${key}:${this[key]},`
    }
    return str
}

// shallow equals
Object.prototype.equals = function(o) {
    let equal = true
    for (key of Object.keys(this)) {
        equal = equal && (this[key] === o[key])
    }
    return equal
}

h = new HashTable()
a = {a: 1}
b = {b: 2}
c = {c: 3}
d = {d: 4}
e = {e: 5}
f = {f: 6}
g = {g: 7}


console.log('uniform hashing?...')
console.log(h.hash(a))
console.log(h.hash(b))
console.log(h.hash(c))
console.log(h.hash(d))
console.log(h.hash(e))
console.log(h.hash(f))
console.log(h.hash(g))

console.log()
console.log('empty array?')
console.log(h.arr)

console.log()
console.log('inserting...')
h.insert(a)
h.insert(b)
h.insert(c)
h.insert(d)
h.insert(e)
h.insert(f)
h.insert(g)

console.log(h.arr)

console.log()
console.log('generating and inserting random objects')
h = new HashTable()
alpha = 'abcdefghijklmnopqrstuvwxyz'
for(let i = 0; i < 8; i++) {
    o = {}
    o[alpha[Math.floor(Math.random() * alpha.length)]] =
        alpha[Math.floor(Math.random() * alpha.length)]
    h.insert(o)
}
console.log(h.arr)
