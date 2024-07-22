const http = require('http'); // Import the HTTP module
const fs = require('fs'); // Import the file system module

const db = process.argv[2] === undefined ? '' : process.argv[2]; // Database path from command-line arguments
const host = '127.0.0.1'; // Host address
const port = 1245; // Port number

// Create an HTTP server
const app = http.createServer((req, res) => {
  res.statusCode = 200; // Set default status code to 200 (OK)
  res.setHeader('Content-Type', 'text/plain'); // Set response header to plain text

  if (req.url === '/') {
    // Handle root route
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    // Handle /students route
    const body = ['This is the list of our students'];

    fs.readFile(db, 'utf-8', (error, data) => {
      if (error) {
        // Handle file read errors
        body.push('Cannot load the database');
        res.end(body.join('\n'));
      } else {
        const courses = new Map(); // Map to store course data
        let students = data.split('\n'); // Split CSV data into lines
        students = students.slice(1, students.length - 1); // Remove header and empty lines

        // Parse CSV data and organize into courses
        students.forEach((student) => {
          const studentData = student.split(','); // Split line into fields
          const firstName = studentData[0]; // Extract student name
          const field = studentData[3]; // Extract course field

          // Add student to the appropriate course in the map
          if (courses.has(field)) {
            courses.get(field).push(firstName);
          } else {
            courses.set(field, [firstName]);
          }
        });

        // Create response body
        body.push(`Number of students: ${students.length}`);
        courses.forEach((courseStudents, course) => {
          body.push(`Number of students in ${course}: ${courseStudents.length}. List: ${courseStudents.join(', ')}`);
        });

        // Send the response
        res.end(body.join('\n'));
      }
    });
  } else {
    // Handle other routes (not implemented)
    res.statusCode = 404; // Set status code to 404 (Not Found)
    res.end('Not Found');
  }
});

// Start the server
app.listen(port, host, () => {
  console.log(`Server is live, running at http://${host}:${port}`);
});

// Export the server instance
module.exports = app;
