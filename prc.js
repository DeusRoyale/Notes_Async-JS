function isPangram(string) {
  return "abcdefghijklmnopqrstuvwxyz"
    .toLowerCase()
    .split('')
    .every((x) => string.includes(x))
    ? console.log('true')
    : console.log('false')
}

isPangram("A quick brown fox jumps over the lazy dog")
