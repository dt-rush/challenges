function allValidParens(n) {
    
    recurse = function(str, depth, strs=[]) {
        if (depth === 0) {
            strs.push(str + ")")
        }
        recurse(str + ")", depth, strs)
        recurse(str + "(", depth-1, strs)
        return strs
    }

    strs = recurse("(", n - 1)

    return strs
}








// testing
n = 3
// should return "((()))", "(()())", "(())()", "()(())", "()()()"
console.log(allValidParens(n)) 
