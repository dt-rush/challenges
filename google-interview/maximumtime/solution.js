function maxHour(s) {
    if (/\?\?/.test(s)) {
        return '23'
    }
    if (/[01]\?/.test(s)) {
        return s[0] + '9'
    }
    if (/2\?/.test(s)) {
        return '23'
    }
    if (/\?0/.test(s)) {
        return '20'
    }
    if (/\?[1-3]/.test(s)) {
        return '2' + s[1]
    }
    if (/\?[4-9]/.test(s)) {
        return '1' + s[1]
    }
    if (/\d\d/.test(s)) {
        return s
    }
}

function maxMinute(s) {
    if (/\?\?/.test(s)) {
        return '59'
    }
    if (/\d\?/.test(s)) {
        return s[0] + '9'
    }
    if (/\?\d/.test(s)) {
        return '5' + s[1]
    }
    if (/\d\d/.test(s)) {
        return s
    }
}

function maximumTime(s) {
    h = s.split(':')[0]
    m = s.split(':')[1]
    return maxHour(h) + ':' + maxMinute(m)
}



// testing
console.log(maxHour('??') == '23')
console.log(maxHour('0?') == '09')
console.log(maxHour('1?') == '19')
console.log(maxHour('2?') == '23')
console.log(maxHour('?0') == '20')
console.log(maxHour('?1') == '21')
console.log(maxHour('?5') == '15')
console.log(maxHour('01') == '01')
console.log()
console.log(maxMinute('??') == '59')
console.log(maxMinute('0?') == '09')
console.log(maxMinute('3?') == '39')
console.log(maxMinute('32') == '32')
console.log(maxMinute('1?') == '19')
console.log()
console.log(maximumTime('?4:5?') == '14:59')
console.log(maximumTime('23:5?') == '23:59')
console.log(maximumTime('2?:22') == '23:22')
console.log(maximumTime('0?:??') == '09:59')
console.log(maximumTime('??:??') == '23:59')


