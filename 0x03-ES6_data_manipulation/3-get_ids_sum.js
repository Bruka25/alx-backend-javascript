function getStudentIdsSum(list) {
  if (list instanceof Array) {
    return list.reduce((sum, student) => sum + student.id, 0);
  }
  return 0;
}

export default getStudentIdsSum;
