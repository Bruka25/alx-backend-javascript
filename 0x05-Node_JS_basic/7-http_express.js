const fs = require('fs'); // Import the file system module
const express = require('express'); // Import the Express module

const serverHost = '127.0.0.1'; // Define the host address
const serverPort = 1245; // Define the port number
const app = express(); // Create an Express application

// Handle GET request for the root route
app.get('/', (request, response) => {
  response.send('Hello Holberton School!'); // Send response
});

// Handle GET request for the /students route
app.get('/students', (request, response) => {
  const databasePath = process.argv[2] === undefined ? '' : process.argv[2]; // Database path from CLI argument
  fs.readFile(databasePath, 'utf-8', (err, data) => {
    const responseBody = ['This is the list of our students']; // Initialize response body
    if (err) {
      // Handle file read errors
      responseBody.push('Cannot load the database');
      response.send(responseBody.join('\n')); // Send error response
    } else {
      const courseDataMap = new Map(); // Map to store course data
      let studentLines = data.split('\n'); // Split CSV data into lines
      // Remove header and empty lines
      studentLines = studentLines.slice(1, studentLines.length - 1);
      // Parse CSV data and organize into courses
      studentLines.forEach((line) => {
        const studentInfo = line.split(','); // Split line into fields
        const firstName = studentInfo[0]; // Extract student name
        const courseField = studentInfo[3]; // Extract course field
        if (courseDataMap.has(courseField)) {
          courseDataMap.get(courseField).students.push(firstName); // Add student to course
          courseDataMap.get(courseField).count += 1; // Increment student count
        } else {
          courseDataMap.set(courseField, { students: [firstName], count: 1 }); // Initialize course
        }
      });

      // Organize data in an array
      responseBody.push(`Number of students: ${studentLines.length}`);
      courseDataMap.forEach((courseData, courseField) => {
        responseBody.push(
          `Number of students in ${courseField}: ${courseData.count}. `
          + `List: ${courseData.students.join(', ')}`,
        );
      });
      response.send(responseBody.join('\n')); // Send response with student data
    }
  });
});

// Start the server and listen on the specified port and host
app.listen(serverPort, serverHost, () => {
  console.log(`Server is live, running at http://${serverHost}:${serverPort}`);
});

// Export the Express application for use in other modules
module.exports = app;
