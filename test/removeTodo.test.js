import removeTodo from '../src/scripts/mymodules/removeTodo';

const projects = [{
  id: '12345678-xyz',
  title: 'My Morning Routine',
  description: 'This is my morning routine',
  todos: [{
    id: 'abc-123', title: 'Make some cofee', description: 'I need some coffee in the morning', dueDate: '2021-08-31', priority: 'high', completed: false,
  }, {
    id: 'def-456', title: 'My new Todo', description: 'This is my new Todo', dueDate: '2021-02-27', priority: 'middle', completed: false,
  }],
}];

describe('Test removeTodo', () => {
  test('should remove todo from the local valiable and localstorage', () => {
    const project = projects[0];
    const todo = project.todos[0];
    removeTodo(todo, project, projects);
    expect(project.todos.length).toBe(1);
  });
});
