const fs = require('fs');
const fileContents = fs.readFileSync('theData', 'ascii');

console.log(fileContents)
