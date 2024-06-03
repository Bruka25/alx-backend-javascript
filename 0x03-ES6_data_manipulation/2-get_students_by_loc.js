function getStudentsByLocation(list, city) {
	if (list instanceof Array) {
  return list.filter((student) => student.location === city);
              }
	return 0;
}

export default getStudentsByLocation;
