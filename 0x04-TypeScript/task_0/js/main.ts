// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York'
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'Los Angeles'
};

// Create an array containing the students
const studentsList: Student[] = [student1, student2];

// Create the table and append it to the document body
const table = document.createElement('table');
const tableHeader = table.insertRow();
tableHeader.insertCell().textContent = 'First Name';
tableHeader.insertCell().textContent = 'Location';

studentsList.forEach(student => {
  const row = table.insertRow();
  row.insertCell().textContent = student.firstName;
  row.insertCell().textContent = student.location;
});

document.body.appendChild(table);

