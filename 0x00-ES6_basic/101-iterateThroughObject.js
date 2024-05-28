export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  for (const value of reportWithIterator) {
    result += `${value} | `;
  }
  // Remove the trailing '|'
  result = result.slice(0, -2);
  return result;
}
