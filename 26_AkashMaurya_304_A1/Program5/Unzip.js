const fs = require("fs");
const zlib = require("zlib");

const input = fs.createReadStream("./Program5/sample.txt.gz");
const output = fs.createWriteStream("./Program5/unzipSample.txt");

input.pipe(zlib.createGunzip()).pipe(output);

console.log("unzip done!");