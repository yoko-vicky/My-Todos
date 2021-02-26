import { generatePrFieldDOM, generateFormDOM, generateTodoMoreDOM, generateTodoItemDOM, generatePrTodosDOM, generateProjectItemDOM, renderProjects } from '../src/scripts/mymodules/renderProjects';

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

const project = projects[0];
const todo = projects[0].todos[0];
describe('Test inner functions in renderProjects', () => {
  test('should generate and return a project form field element', () => {
    const field = generatePrFieldDOM('title', 'text', 'todoTitle', 'add-todo-field', todo);
    expect(field.children[0].textContent).toEqual('Title');
  });

  test('should generate and return a form element', () => {
    const form = generateFormDOM('add-todo-form', project, projects, todo);
    expect(form.children[3].children[0].textContent).toEqual('Priority:');
  });

  test('should generate and return a todo more element', () => {
    const todoMoreItem = generateTodoMoreDOM(todo, project, projects);
    expect(todoMoreItem.children[0].classList.contains('todo__desc')).toBe(true);
  });

  test('should generate and return a todo element', () => {
    const todoItem = generateTodoItemDOM(todo, project, projects);
    expect(todoItem.children[0].classList.contains('todo__rmbtn')).toBe(true);
  });

  test('should generate and return a project todos element', () => {
    const projectTodos = generatePrTodosDOM(project, projects);
    expect(projectTodos.children[0].children[1].classList.contains('todo__due')).toBe(true);
  });

  test('should generate and return a project item element', () => {
    const prItem = generateProjectItemDOM(project, projects);
    expect(prItem.children[0].classList.contains('project__rmbtn')).toBe(true);
  });

  test('should generate and render all the projects', () => {
    document.body.innerHTML = '<div id="projects"></div>';
    renderProjects(projects);
    expect(document.body.querySelectorAll('.project').length).toBeGreaterThanOrEqual(1);
  });
});
