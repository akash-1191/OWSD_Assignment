const fs = require("fs");
const zlib = require("zlib");

const input = fs.createReadStream("sample.txt.gz");
const output = fs.createWriteStream("unzipSample.txt");

input.pipe(zlib.createGunzip()).pipe(output);

console.log("unzip done!");