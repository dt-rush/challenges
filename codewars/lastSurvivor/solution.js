function lastSurvivor(letters, coords) {
    for (removal of coords) {
        // remove the letter at index `removal`
        letters = Array.from(letters)
            .filter((x, i) => i != removal)
            .join('')
    }
    return (letters)
}

// testing
console.log(lastSurvivor('zbk', [0, 1]))
