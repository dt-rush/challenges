function numReceived(emails) {
    received = new Set()
    for (addr of emails) {
        local = addr.split('@')[0]
        domain = addr.split('@')[1]
        // remove after plus from local (if no plus, unchanged)
        local = local.split('+')[0]
        local = local.replace(/\./g, '')
        email = local + '@' + domain
        console.log('sending to ' + email)
        received.add(email)
    }
    return received.size
}



// testing
emails = [
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com"
]
console.log(numReceived(emails)) // should be 2

emails = [
    "a@leetcode.com",
    "b@leetcode.com",
    "c@leetcode.com"
]
console.log(numReceived(emails)) // should be 3
