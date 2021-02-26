import removeProject from '../src/scripts/mymodules/removeProject';

const projects = [{
  id: '12345678-xyz',
  title: 'My Morning Routine',
  description: 'This is my morning routine',
  todos: [],
}];

test('should remove project with the given id from projects', () => {
  removeProject('12345678-xyz', projects);
  expect(projects.length).toBe(0);
});
