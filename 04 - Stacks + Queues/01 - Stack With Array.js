// Adding and removing from the end
var stack = []

stack.push("google")
stack.push("instagram")
stack.push("twitter")

console.log(stack.pop()) // twitter
console.log(stack.pop()) // instagram
console.log(stack) // google

stack.push('amazom') // google, amazon

console.log(stack.pop()) // amazom

// Adding and removing from de beginning
var stack = []

stack.unshift('google')
stack.unshift('facebook')
stack.unshift('apple')

console.log(stack) // [ 'apple', 'facebook', 'google' ]

console.log(stack.shift()) // apple
