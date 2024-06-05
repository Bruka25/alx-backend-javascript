// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any; // Allows adding any additional property
}

// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Define the printTeacherFunction interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the printTeacher function
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage of the printTeacher function
console.log(printTeacher("John", "Doe")); // Output: J. Doe

// Create a teacher object
const teacher1: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  yearsOfExperience: 10,
  location: 'New York',
  contract: true
};

// Create a director object
const director1: Directors = {
  firstName: 'Jane',
  lastName: 'Smith',
  fullTimeEmployee: false,
  location: 'Los Angeles',
  numberOfReports: 5,
  contract: false
};

// Create an array containing the teachers and directors
const staffList: (Teacher | Directors)[] = [teacher1, director1];

// Create the table and append it to the document body
const table = document.createElement('table');
const tableHeader = table.insertRow();
tableHeader.insertCell().textContent = 'First Name';
tableHeader.insertCell().textContent = 'Location';

staffList.forEach(staff => {
  const row = table.insertRow();
  row.insertCell().textContent = staff.firstName;
  row.insertCell().textContent = staff.location;
});

document.body.appendChild(table);
