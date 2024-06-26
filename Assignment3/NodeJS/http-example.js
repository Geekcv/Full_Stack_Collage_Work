// http-example.js

const http = require("http");

// Create a basic HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World!\n");
});

// Server listening on port 3000
server.listen(3000, "localhost", () => {
  console.log("Server running at http://localhost:3000/");
});
