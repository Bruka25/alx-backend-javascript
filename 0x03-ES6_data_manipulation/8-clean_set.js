function cleanSet(set, startString) {
  let result = '';
  if (!set || !startString) {
    return '';
  }
  for (const value of set) {
    if (value.startsWith(startString)) {
      if (result) {
        result += '-';
      }
      result += value.slice(startString.length);
    }
  }
  return result;
}

export default cleanSet;
