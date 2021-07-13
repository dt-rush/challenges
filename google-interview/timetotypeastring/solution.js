function timeToType(keyboard, text) {
    t = 0
    position = 0
    while (text.length) {
        ch = text[0]
        newPosition = keyboard.indexOf(ch)
        t += Math.abs(newPosition - position)
        position = newPosition
        text = text.slice(1)
    }
    return t
}

console.log(timeToType("abcdefghijklmnopqrstuvwxy", text='cba'))
