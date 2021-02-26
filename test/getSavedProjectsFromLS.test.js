import getSavedProjectsFromLS from '../src/scripts/mymodules/getSavedProjectsFromLS';

describe('Test getSavedProjectsFromLS', () => {
  beforeEach(() => {
    localStorage.removeItem('projects');
  });

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
    localStorage.setItem('projects', JSON.stringify(projects));
    const data = getSavedProjectsFromLS();
    expect(data).toEqual(projects);
  });

  test('should return empty array if the data with key projects does not exist', () => {
    const data = getSavedProjectsFromLS();
    expect(data).toEqual([]);
  });
});
