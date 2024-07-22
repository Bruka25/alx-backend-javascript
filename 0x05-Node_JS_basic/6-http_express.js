const express = require('express'); // Import the Express module

const host = '127.0.0.1'; // Define the host address
const port = 1245; // Define the port number
const app = express(); // Create an Express application

// Handle GET request for the root route
app.get('/', (req, res) => {
  res.send('Hello Holberton School!'); // Send response
});

// Start the server and listen on the specified port and host
app.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`);
});

// Export the Express application for use in other modules
module.exports = app;
