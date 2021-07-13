function VigenèreCipher(key, abc) {

  this.cipher = function (c, kix) {
    shift = abc.indexOf(key[kix])
    pos = abc.indexOf(c)
    newPos = (pos + shift) % abc.length
    return abc[newPos]
  }

  this.decipher = function (c, kix) {
    shift = abc.indexOf(key[kix])
    pos = abc.indexOf(c)
    newPos = (pos - shift + abc.length) % abc.length
    return abc[newPos]
  }

  this.encode = function (str) {
    kix = 0
    outs = ''
    for (let i = 0; i < str.length; i++) {
      if (abc.indexOf(str[i]) == -1) {
        outs += str[i]
      } else {
        outs += this.cipher(str[i], kix)
      }
      kix += 1
      kix %= key.length
    }
    return outs
  };

  this.decode = function (str) {
    kix = 0
    outs = ''
    for (let i = 0; i < str.length; i++) {
      if (abc.indexOf(str[i]) == -1) {
        outs += str[i]
      } else {
        outs += this.decipher(str[i], kix)
      }
      kix += 1
      kix %= key.length
    }
    return outs
  };
}



// testing
const abc = 'abcdefghijklmnopqrstuvwxyz'
v = new VigenèreCipher('password', abc)
console.log(v.encode('codewars'))
console.log(v.decode('rovwsoiv'))
