// path-example.js

const path = require("path");

// Example of joining paths
const fullPath = path.join(__dirname, "files", "example.txt");
console.log("Full Path:", fullPath);

// Example of parsing path
const parsedPath = path.parse(fullPath);
console.log("Parsed Path:", parsedPath);
