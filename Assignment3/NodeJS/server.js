// server.js

const express = require("express");
const path = require("path");
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "Public")));

// Serve index.html as the main page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "Public", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// for runing app

// node server.js
// node http-example.js
// node fs-example.js
// node os-example.js
// node path-example.js
// node url-example.js
// node querystring-example.js
