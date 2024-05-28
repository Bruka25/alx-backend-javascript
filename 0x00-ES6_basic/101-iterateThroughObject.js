export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  let current;

  while ((current = reportWithIterator.next()).done === false) {
    result += `${current.value} | `;
  }

  if (result) {
    result = result.slice(0, -2);
  }

  return result;
}
