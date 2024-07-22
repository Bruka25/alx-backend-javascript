const http = require('http'); // Import the http module

const host = '127.0.0.1'; // Define the host address
const port = 1245; // Define the port number

// Create an HTTP server
const app = http.createServer((req, res) => {
  // Set the response status code to 200 (OK)
  res.statusCode = 200;

  // Set the response header to indicate plain text content
  res.setHeader('Content-Type', 'text/plain');

  // Send the response and end the connection
  res.end('Hello Holberton School!');
});

// Make the server listen on the specified port and host
app.listen(port, host, () => {
  // Log a message when the server starts successfully
  console.log(`Server is running://${host}:${port}`);
});

// Export the server instance for use in other modules
module.exports = app;
