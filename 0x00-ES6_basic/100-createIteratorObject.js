export default function createIteratorObject(report) {
  const allEmployees = Object.values(report.allEmployees);
  let departmentIndex = 0;
  let employeeIndex = 0;

  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (departmentIndex < allEmployees.length) {
        if (employeeIndex < allEmployees[departmentIndex].length) {
          const value = allEmployees[departmentIndex][employeeIndex];
          employeeIndex += 1;
          return { value, done: false };
        }
        employeeIndex = 0;
        departmentIndex += 1;
        return this.next();
      }
      return { value: undefined, done: true };
    },
  };
}
