ELEMENTS = {
    'S': 'Sulfur',
    'N': 'Nitrogen',
    'Ac': 'Actinium',
    'K': 'Potassium',
    'Na': 'Sodium',
    'C': 'Carbon',
    'Sn': 'Tin'
}


function prefixMatch(str, el) {
    a = str.substr(0, el.length).toUpperCase()
    b = el.toUpperCase()
    return a === b
}

function genForms(str, els=[], forms=[]) {
    if (str === '') {
        forms.push(els)
    }
    for (el of Object.keys(ELEMENTS)) {
        if (prefixMatch(str, el)) {
            genForms(str.substr(el.length, str.length),
                    els.concat([el]),
                    forms)
        }
    }
    return forms
}


function elementalForms(str) {
    if (str === '') {
        return []
    }
    forms = genForms(str)
    forms = forms.map((arr) => arr.map(x => ELEMENTS[x] + ' (' + x + ')'))
    return forms
}



// testing
console.log(genForms('snack'))
console.log(elementalForms('snack'))
