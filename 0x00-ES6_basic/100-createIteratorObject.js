export default function createIteratorObject(report) {
  const departments = Object.keys(report.allEmployees);
  let index = 0;

  return {
    next() {
      if (index < departments.length) {
        const department = departments[index];
        const employees = report.allEmployees[department];
        const employee = employees[index % employees.length];
        index++;
        return { value: employee, done: false };
      } else {
        return { done: true };
      }
    },
  };
}
