// eslint-disable-next-line import/no-unresolved
import Project from '../src/scripts/mymodules/ProjectConstructor';

// jest.mock('uuid');
test('should create Project object with given arguments including title, description, dueDate, priority', () => {
  const project = new Project('My project', 'This is my project');
  expect(project.title).toBe('My project');
});
