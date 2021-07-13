/*
 * split a string like '2a-3ab+4bc' into ['2a', '-3ab', '+4bc']
*/
function termsplit(poly) {
  terms = []
  do {
    match = poly.match(/([-+]?[0-9]*[a-z]+)/)
    if (match !== null) {
      terms.push(match[1])
      poly = poly.substr(match[1].length)
    }
  } while (match !== null)
  return terms
}

/*
 * represents a poly string like '-a+2ab'
 * as 
 * [
 *   { coeff: -1, vars: 'a' },
 *   { coeff: 2, vars: 'ab' },
 * ]
*/
function representation(poly) {
  return termsplit(poly).map((s) => {
    match = s.match(/([-+]?)([0-9]*)([a-z]+)/)
    sign = match[1] === '' ? '+' : match[1]
    coeff = parseInt(match[2] === '' ? '1' : match[2])
    vars = Array.from(match[3]).sort().join('')
    if (sign === '-') {
      coeff *= -1
    }
    return {
      coeff,
      vars
    }
  })
}

/* 
 * sort a representation object (output of representation() above)
 * according to:
 *   - number of variables
 *   - lexicographic sort on variables
*/
function reprSort(repr) {
  return repr.sort((a, b) => {
    sortOne = a.vars.length - b.vars.length
    if (sortOne != 0) {
      return sortOne
    }
    return a.vars.localeCompare(b.vars)
  })
}

/*
 * groups like terms in a polynomial like '-a+3a'
 * into a representation  
 * [
 *   { coeff: 2, vars: 'a' },
 * ]
*/
function groupTerms(poly) {
  repr = representation(poly)
  sortedRepr = reprSort(repr)
  reduced = sortedRepr.reduce((acc, x) => {
    if (acc.length >= 1 &&
      acc[acc.length-1].vars == x.vars) {
      acc[acc.length-1].coeff += x.coeff
    } else {
      acc.push(x)
    }
    return acc
  }, [])
  return reduced
}

/*
 * given a coefficient, return the string it should be as a prefix
 */
function coeffStr(coeff) {
  switch (coeff) {
    case -1: return '-'
    case 1: return '+'
    default: {
      if (coeff > 0) {
        return '+' + coeff
      } else {
        return '' + coeff
      }
    }
  }
}

/*
 * simplify a polynomial, eg.
 * "-a+5ab+3a-c-2a" -> "-c+5ab"
*/
function simplify(poly){
  grouped = groupTerms(poly)
  grouped = grouped.filter(x => x.coeff !== 0)
  str = grouped.reduce((s, x) => s + coeffStr(x.coeff) + x.vars, '')
  if (str[0] == '+') {
    str = str.substr(1)
  }
  return str
}



// testing
poly = '-a+5ab+3a-c-2a'
console.log('simplification of ' + poly)
console.log(simplify(poly))

poly = '+3xy+14cxy+1xyc-5y+3y+9yxc+7y+6xy-8yx'
console.log('simplification of ' + poly)
console.log(simplify(poly))
