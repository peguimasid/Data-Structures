let queue = []

queue.push(1)
queue.push(2)
queue.push(3)

console.log(queue) // [1, 2, 3]

// primeiro a entrar tem que ser o primeiro a sair

queue.shift() // 1

console.log(queue) // [2, 3]

// push / shift
// unshift / pop