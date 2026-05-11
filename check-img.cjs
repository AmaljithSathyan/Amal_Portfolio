const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

const filePath = path.join(__dirname, 'src/assets/hero.png');
const buffer = fs.readFileSync(filePath);

let offset = 8;
let idatBuffers = [];
while (offset < buffer.length) {
    const length = buffer.readUInt32BE(offset);
    const type = buffer.toString('ascii', offset + 4, offset + 8);
    
    if (type === 'IDAT') {
        idatBuffers.push(buffer.subarray(offset + 8, offset + 8 + length));
    }
    offset += length + 12;
}

const idatData = Buffer.concat(idatBuffers);
const uncompressed = zlib.inflateSync(idatData);

// Read first line (filter byte + pixels)
const filter = uncompressed[0];
const r = uncompressed[1];
const g = uncompressed[2];
const b = uncompressed[3];
const a = uncompressed[4];

console.log({ filter, r, g, b, a });
