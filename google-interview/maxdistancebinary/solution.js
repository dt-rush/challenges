function StringTrie() {

    this.root = { children: [], val: undefined }

    this.nodeHasChild = function(node, val) {
        for (child of node.children) {
            if (child.val === val) {
                return child
            }
        }
        return null
    }

    this.insert = function(s) {
        console.log('-----')
        console.log('inserting ' + s)
        node = this.root
        console.log(JSON.stringify(this.root))
        for (ch of s) {
            newNode = undefined
            if (newNode = this.nodeHasChild(node, ch)) {
                // this ch already in trie
            } else {
                newNode = { children: [], val: ch }
                node.children.push(newNode)
            }
            node = newNode
        }
        console.log(JSON.stringify(this.root))
        console.log('-----')
    }

}



t = new StringTrie()
t.insert('0')
t.insert('01')
t.insert('011')
console.log(JSON.stringify(t.root))
