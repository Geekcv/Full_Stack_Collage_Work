const fs = require("fs");
const path = "E:\\Collage\\Full_stack\\Assignment3\\NodeJS\\newfile.txt";

// Example of reading a file
fs.readFile(path, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data);

  // Example of writing to a file
  fs.writeFile(path, "Hello, Abhishek", (err) => {
    if (err) {
      console.error("Error writing to file:", err);
      return;
    }
    console.log("File written successfully!");
  });

  // Read the file again to verify the content

  fs.readFile(path, "utf8", (err, newData) => {
    if (err) {
      console.error("Error reading file after write:", err);
      return;
    }
    console.log("Updated file content:", newData);
  });
});
