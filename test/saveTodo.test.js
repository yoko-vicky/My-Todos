import { createNewTodo, clearFieldOfTodo, saveTodo } from '../src/scripts/mymodules/saveTodo';

let event;
let myTodo;
const projects = [];
const project = {
  title: 'My project',
  description: 'My project description',
  todos: [],
};

describe('Test saveTodo', () => {
  beforeEach(() => {
    event = {
      target: {
        elements: {
          todoTitle: { value: 'My Todo' },
          todoDesc: { value: 'My description' },
          todoDue: { value: 20211231 },
          todoPriority: { value: 'high' },
        },
      },
    };
    myTodo = {
      title: 'My Todo',
      description: 'My description',
      dueDate: 20211231,
      priority: 'high',
      completed: false,
    };
  });

  test('should save todo to local variable and to localstorage if it is a new todo', () => {
    const todo = createNewTodo(event);
    expect(todo.title).toBe('My Todo');
  });

  test('should clear the fields including title', () => {
    clearFieldOfTodo(event);
    expect(event.target.elements.todoTitle.value).toBe('');
  });

  test('should ', () => {
    saveTodo(event, project, projects, 'add-todo-form', myTodo);
    expect(project.todos[0].title).toEqual('My Todo');
  });
});
