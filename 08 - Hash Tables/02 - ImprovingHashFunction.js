function hash(string, length) {
  let result = 0

  const PRIME_NUMBER = 31;

  for (let i = 0; i < Math.min(string.length, 100); i++) {
    const char = string[i]
    const value = char.charCodeAt(0) - 96
    result = (result * PRIME_NUMBER + value) % length
  }

  return result
}

console.log(hash('cyan', 13))