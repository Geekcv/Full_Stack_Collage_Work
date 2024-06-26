// os-example.js

const os = require("os");

// Example of getting CPU information
console.log("CPU Architecture:", os.arch());
console.log("CPU Core Count:", os.cpus().length);

// Example of getting OS platform and version
console.log("Platform:", os.platform());
console.log("OS Version:", os.version());
