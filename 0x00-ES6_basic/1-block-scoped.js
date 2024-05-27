export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  /* conditional block */
  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }
  /* prevent hoisting with const */

  return [task, task2];
}
