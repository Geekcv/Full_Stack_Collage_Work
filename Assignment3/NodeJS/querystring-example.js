// querystring-example.js

const querystring = require("querystring");

// Example of parsing query string
const queryString = "name=John&age=30";
const parsedQuery = querystring.parse(queryString);
console.log("Parsed Query:", parsedQuery);

// Example of formatting object to query string
const obj = { name: "Alice", age: "25" };
const formattedQuery = querystring.stringify(obj);
console.log("Formatted Query:", formattedQuery);
