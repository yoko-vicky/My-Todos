import getSavedProjectsFromLS from '../src/scripts/mymodules/getSavedProjectsFromLS';

test('should return the default project data if it exists', () => {
  // eslint-disable-next-line no-unused-expressions
  const projects = {
    id: 'abcdedg-12345',
    title: 'My LunchTime Todos',
    description: 'This is my lunch Time todos',
    todos: [{
      id: '1234-xyz', title: 'Eat lunch', description: 'I need to have delicious lunch', dueDate: '2021-02-27', priority: 'middle', completed: false,
    }],
  };
  localStorage.removeItem('projects');
  localStorage.setItem('projects', JSON.stringify(projects));
  const data = getSavedProjectsFromLS();
  expect(data).toEqual(projects);
});

test('should return empty array if the data with key projects does not exist', () => {
  localStorage.removeItem('projects');
  const data = getSavedProjectsFromLS();
  expect(data).toEqual([]);
});
