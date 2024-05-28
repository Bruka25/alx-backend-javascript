// 0-constants.test.js
import { taskFirst, taskNext } from './0-constants.js';

test('taskFirst returns the first task', () => {
  expect(taskFirst()).toBe('I prefer const when I can.');
});

test('taskNext returns the next task', () => {
  expect(taskNext()).toBe('But sometimes let is okay');
});
