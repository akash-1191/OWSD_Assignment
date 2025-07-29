const fs = require("fs");
const Zlib = require("zlib");

const input = fs.createReadStream("sample.txt");
const output = fs.createWriteStream("sample.txt.gz");

input.pipe(Zlib.createGzip()).pipe(output);

console.log("file zipped!!");