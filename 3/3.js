const _ = require('lodash');
const input = require('../load')(3);

function isValid(s)
{
    const sortedSides = s.slice().sort((a, b) => a < b ? 1 : -1)
    return sortedSides[0] < sortedSides[1] + sortedSides[2]
}

function parse(input) {
  return input.split('\n').map(line => [
    parseInt(line.substr(0, 5), 10),
    parseInt(line.substr(5, 10), 10),
    parseInt(line.substr(10, 15), 10)
  ])
}

function count(input) {
  return parse(input).filter(isValid).length
}

console.log(count(input));

module.exports = {
  run(container) {
    
  },

  stop() {
  },
  }