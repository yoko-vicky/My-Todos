import createElement from '../src/scripts/mymodules/utills';

test('should return element with given attributes including tag, class, and text content', () => {
  const element = createElement('div', 'test-div', 'This is test');
  expect(element.textContent).toEqual('This is test');
});
