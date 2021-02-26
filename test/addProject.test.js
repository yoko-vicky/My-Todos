import { addProjectObjToProjects, addProjectsToLocalStorage, clearFieldOfProject } from '../src/scripts/mymodules/addProject';

const projects = [];
const project = {
  id: '12345678-xyz',
  title: 'My Morning Routine',
  description: 'This is my morning routine',
  todos: [],
};
let event;

describe('Test addProject', () => {

  beforeEach(() => {
    localStorage.removeItem('projects');
    event = {
      target: {
        elements: {
          prTitle: { value: 'My Project' },
          prDesc: { value: 'My description' },
        },
      },
    };
  });

  test('should add project to projects in local variable', () => {
    addProjectObjToProjects(project, projects);
    expect(projects.length).toBe(1);
  });

  test('should set projects to local storage', () => {
    addProjectsToLocalStorage(projects);
    const gotProjects = JSON.parse(localStorage.getItem('projects'));
    expect(gotProjects[0]).toEqual(project);
  });

  test('should ', () => {
    clearFieldOfProject(event);
    expect(event.target.elements.prTitle.value).toBe('');
  });

  // test('should ', () => {
  //   addProject(projects)
  // });
});
