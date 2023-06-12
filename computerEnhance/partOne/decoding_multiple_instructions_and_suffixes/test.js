const fs = require('fs');
//const buffer = fs.readFileSync('listing_0037_single_register_mov');
const buffer = fs.readFileSync('listing_0039_more_movs');

const instructions = {
  0b100010: 'mov',  //register/memory to/from register
  0b1100011: 'mov', //immediate to register/memory
  0b1011: 'mov',    //immediate to register
  0b1010000: 'mov', //memory to accumulator
  0b1010001: 'mov', //accumulator to memory
};

const modes = {
  0b11: 'register mode',
};

const regWideTrue = {
  0b000: 'ax',
  0b001: 'cx',
  0b010: 'dx',
  0b011: 'bx',
  0b100: 'sp',
  0b101: 'bp',
  0b110: 'si',
  0b111: 'di',
}

const regWideFalse = {
  0b000: 'al',
  0b001: 'cl',
  0b010: 'dl',
  0b011: 'bl',
  0b100: 'ah',
  0b101: 'ch',
  0b110: 'dh',
  0b111: 'bh',
}

console.log('bits 16\n');

let i = 0;
while (i < buffer.length) {
  let firstByte = buffer[i];
  console.log('firstbyte = ' + firstByte.toString(2))

  //immediate to register move
  if (firstByte>>4===0b1011) {
    let instruction = 'mov';
    let wSet = 0b1&(firstByte>>3);

    // sets how far the loop should jump depending on how wide the instruction
    if (wSet === 0b1) {
      i = i + 3;
    } else if (wSet === 0b0) {
      i = i + 2;
    }

  //register/memory to/from register move
  } else if (firstByte>>2===0b100010) {
    let instruction = 'mov';
    let secondByte = buffer[i+1];
    let dSet = 0b1&(firstByte>>1);
    let wSet = 0b1&(firstByte);
    let mod = 0b11&(secondByte>>6);
    let reg = 0b111&(secondByte>>3);
    let regMem = 0b111&(secondByte);
    let output = dSet ? `${instruction} ${reg}, ${regMem}` : `${instruction} ${regMem}, ${reg}`;

    // sets how far the loop should jump depending on how wide the instruction
    if (mod === 0b00 && regMem === 0b110) {
      i = i + 4
    } else if (mod === 0b00) {
      i = i + 2;
    } else if (mod === 0b01) {
      i = i + 3;
    } else if (mod === 0b10) {
      i = i +4;
    } else if (mod === 0b11) {
      i = i + 2
    }

    console.log(output);

  } /*else if (firstByte>>1===0b1100011) {

    i = i +1;
  } else if (firstByte>>1===0b1010000) {

    i = i +1;
  } else if (firstByte>>1===0b1010000) {

    i = i +1;
  } else {
    console.log('else');
    i = i +1;
  }*/
    console.log('end loop manual i++ added');
}
