// url-example.js

const url = require("url");

// Example of parsing a URL
const urlString = "https://example.com/path?query=string";
const parsedUrl = url.parse(urlString, true);
console.log("Parsed URL:", parsedUrl);
