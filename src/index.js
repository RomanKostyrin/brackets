module.exports = function check(value, config) {
  let stack = []
  let index = -1
  for (let i = 0; i < value.length; i++) {
    for (let ind = 0; ind < config.length; ind++) {
      if (config[ind].indexOf(value[i]) != -1) {
        index = [config[ind].indexOf(value[i]), ind]
      }
    }

    if (index[0] === 0) {
      stack.push(value[i])
    }
    if (
      stack[stack.length - 1] === stack[stack.length - 2] &&
      config[index[1]][0] === config[index[1]][1]
    ) {
      stack.pop()
      stack.pop()
    }
    if (index[0] === 1) {
      if (stack[stack.length - 1] === config[index[1]][0]) {
        stack.pop()
      } else if (i <= value.length) {
        return false
      }
    }
  }

  if (stack[0]) {
    return false
  }
  return true
}

const config1 = [['(', ')']]
const config2 = [
  ['(', ')'],
  ['[', ']'],
]
const config3 = [
  ['(', ')'],
  ['[', ']'],
  ['{', '}'],
]
const config4 = [['|', '|']]
const config5 = [
  ['(', ')'],
  ['|', '|'],
]
const config6 = [
  ['1', '2'],
  ['3', '4'],
  ['5', '6'],
  ['7', '7'],
  ['8', '8'],
]
const config7 = [
  ['(', ')'],
  ['[', ']'],
  ['{', '}'],
  ['|', '|'],
]
