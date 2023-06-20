import { gpt } from './gpt';

it('should return the correct value', () => {
  expect(gpt()).toBe('Hello world!');
});
