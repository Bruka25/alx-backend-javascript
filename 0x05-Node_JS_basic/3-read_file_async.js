const fs = require('fs');

const countStudents = (dataPath) => new Promise((resolve, reject) => {
  // Asynchronously read the file
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      // Reject the promise if there's an error reading the file
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      // Process the file data
      const fileLines = data
        .toString('utf-8') // Convert buffer to string (not strictly necessary here)
        .trim() // Remove leading/trailing whitespace
        .split('\n'); // Split the file content into lines

      // Object to group students by course
      const studentGroups = {};
      // Extract the field names from the header row
      const dbFieldNames = fileLines[0].split(',');
      // Get student property names (excluding the last field which is the course)
      const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);
      for (const line of fileLines.slice(1)) {
        // Process each student record
        const studentRecord = line.split(',');
        // Extract student properties
        const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
        const field = studentRecord[studentRecord.length - 1]; // Extract course field

        // Group students by course
        if (!Object.keys(studentGroups).includes(field)) {
          studentGroups[field] = [];
        }

        // Create an object for student properties
        const studentEntries = studentPropNames
          .map((propName, idx) => [propName, studentPropValues[idx]]);
        // Add student to the appropriate course group
        studentGroups[field].push(Object.fromEntries(studentEntries));
      }

      // Calculate total number of students
      const totalStudents = Object
        .values(studentGroups)
        .reduce((pre, cur) => (pre || []).length + cur.length);

      // Print total number of students
      console.log(`Number of students: ${totalStudents}`);

      // Print student count and names for each course
      for (const [field, group] of Object.entries(studentGroups)) {
        const studentNames = group.map((student) => student.firstname).join(', ');
        console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
      }
      resolve(true); // Resolve the promise successfully
    }
  });
});

module.exports = countStudents;
