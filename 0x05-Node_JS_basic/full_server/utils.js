import fs from 'fs';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const courses = {};
        const lines = data.trim().split('\n');
        const headers = lines[0].split(',');

        for (const line of lines.slice(1)) {
          const student = line.split(',');
          const field = student[3];

          if (!courses[field]) {
            courses[field] = [];
          }
          courses[field].push(student[0]);
        }

        resolve(courses);
      }
    });
  });
}
