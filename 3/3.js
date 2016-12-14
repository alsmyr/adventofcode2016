const _ = require('lodash');
const input = require('../load')(3);

const isValid = ([a, b, c]) => a + b > c && a + c > b && c + b > a;

const data1 = input.split('\n').map(line => _.compact(line.split(/\s+/)).map(i => parseInt(i, 10)));

const data2 = _.flatMap(_.range(data1.length / 3), i => _.times(3, j => _.times(3, k =>
  data1[(i * 3) + k][j]
)));

console.log('1:' + _.filter(data1, isValid).length,'2:' + _.filter(data2, isValid).length);
