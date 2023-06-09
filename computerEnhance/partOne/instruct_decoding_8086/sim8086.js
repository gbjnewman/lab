const fs = require('fs');
//const buffer = fs.readFileSync('listing_0037_single_register_mov');
const buffer = fs.readFileSync('listing_0038_many_register_mov');

const instructions = {
  0b100010: 'mov',
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

for (let i = 0; i < buffer.length; i=i+2) {
  let firstByte = buffer[i];
  let secondByte = buffer[i+1];
  let instruction = instructions[firstByte>>2];
  let dSet = 0b1&(firstByte>>1);
  let wSet = 0b1&(firstByte);
  let mode = modes[secondByte>>6];
  let reg = wSet ? regWideTrue[secondByte>>3&0b111] : regWideFalse[secondByte>>3&0b111];
  let regMem = wSet ? regWideTrue[secondByte&0b111] : regWideFalse[secondByte&0b111];
  let output = dSet ? `${instruction} ${reg}, ${regMem}` : `${instruction} ${regMem}, ${reg}`;

  console.log(output);
}
