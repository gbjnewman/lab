const fs = require('fs');
//const buffer = fs.readFileSync('listing_0038_many_register_mov');
const buffer = fs.readFileSync('listing_0039_more_movs');
for (let i = 0; i<buffer.length; i++) {
  console.log(buffer[i].toString(2))
}
