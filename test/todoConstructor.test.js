import Todo from '../src/scripts/mymodules/todoConstructor';

// jest.mock('uuid');
test('should create todo object with given arguments including title, description, dueDate, priority', () => {
  const todo = new Todo('My Title', 'description', 20210801, 'medium');
  expect(todo.title).toBe('My Title');
});
