console.log(" Current directory:", __dirname);
console.log(" Current file:", __filename);

console.log("\n Timer started...");
setTimeout(() => {
    console.log("Timer finished after 2 seconds");
}, 2000);

console.log(" Node.js version:", process.version);
console.log(" Platform:", process.platform);
console.log(" Working directory:", process.cwd());

console.time(" Execution Time");
for (let i = 0; i < 1000000; i++) {
}
console.timeEnd(" Execution Time");

global.customMessage = "Hello from global scope!";
console.log(" Global message:", global.customMessage);
