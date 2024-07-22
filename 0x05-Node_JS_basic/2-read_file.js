const fs = require('fs');

function countStudents(dbPath) {
  try {
    // Read the content of the CSV file synchronously
    let students = fs.readFileSync(dbPath, 'utf-8');

    // Split the content by new lines to process each row separately
    students = students.split('\n');

    // Remove the header row and any empty trailing row
    students = students.slice(1, students.length - 1);

    // Initialize a map to hold course data
    const courses = new Map();

    // Parse CSV data creating a map of courseData objects.
    students.forEach((student) => {
      // Split each row by comma to extract student data
      const studentData = student.split(',');

      // Extract the student's name and course field
      const firstName = studentData[0];
      const field = studentData[3];

      // Check if the course already exists in the map
      if (courses.has(field)) {
        // If it exists, update the course data with new student
        courses.get(field).students.push(firstName);
        courses.get(field).count += 1;
      } else {
        // If it doesn't exist, create a new entry in the map
        courses.set(field, { students: [firstName], count: 1 });
      }
    });

    // Display the total number of students
    console.log(`Number of students: ${students.length}`);

    // Iterate through the map to display the number of students per course
    courses.forEach((courseData, course) => {
      console.log(`Number of students in ${course}: ${courseData.count}. List: ${courseData.students.join(', ')}`);
    });
  } catch (error) {
    // Handle errors, such as file not found or read errors
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
