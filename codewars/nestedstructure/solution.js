Array.prototype.structureString = function () {
  s = '['
  for (el of this) {
    if (!Array.isArray(el)) {
      s += 'x'
    } else {
      s += el.structureString()
    }
  }
  return s + ']'
}

Array.prototype.sameStructureAs = function (other) {
      
};



// testing
console.log([].structureString())
console.log([1].structureString())
console.log([1, []].structureString())
console.log([1, [1]].structureString())
