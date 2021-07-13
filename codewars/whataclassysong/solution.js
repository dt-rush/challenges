Song = function (title, artist) {
    this.title = title
    this.artist = artist
    this.listened = new Set()
    this.howMany = function(names) {
        names = names.map((s) => s.toUpperCase())
        newCount = 0
        for (name of names) {
            if (!this.listened.has(name)) {
                this.listened.add(name)
                newCount++
            }
        }
        return newCount
    }
}

// testing
const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');
console.log(mountMoose.howMany(['John', 'Fred', 'BOb', 'carl', 'RyAn']))
console.log(mountMoose.howMany(['John', 'Luke', 'AmAndA']))
