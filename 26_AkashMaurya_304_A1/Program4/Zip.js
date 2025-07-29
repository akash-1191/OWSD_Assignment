const fs = require("fs");
const Zlib = require("zlib");

const input = fs.createReadStream("./Program4/sample.txt");
const output = fs.createWriteStream("./Program4/sample.txt.gz");

input.pipe(Zlib.createGzip()).pipe(output);

console.log("file zipped!!");