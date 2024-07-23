import { readDatabase } from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const filePath = process.argv[2];
      const students = await readDatabase(filePath);

      let responseText = 'This is the list of our students\n';
      const fields = Object.keys(students).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

      fields.forEach((field) => {
        responseText += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
      });

      res.status(200).send(responseText.trim());
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    try {
      const filePath = process.argv[2];
      const students = await readDatabase(filePath);
      const { major } = req.params;

      if (!['CS', 'SWE'].includes(major)) {
        res.status(500).send('Major parameter must be CS or SWE');
        return;
      }

      const list = students[major] || [];
      res.status(200).send(`List: ${list.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
