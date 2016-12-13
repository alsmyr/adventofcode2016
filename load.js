const fs = require('fs');
const path = require('path');

module.exports = function(day) {
  var inputPath = path.join(__dirname, `${day}.txt`);
  try {
    var inputString = fs.readFileSync(inputPath, 'utf8');
    return inputString;
  } catch (e) {
    if(e.errno === -4058) { // File not found
      var msg = (
`The file ${day}.txt could not be found!
 Try: node load ${day}`
      );
      throw msg;
    }
  }
};