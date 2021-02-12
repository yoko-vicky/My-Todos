import Todo from './todoConstructor';
// eslint-disable-next-line import/no-cycle
import renderProjects from './renderProjects';

const createNewTodo = (e) => {
  const title = e.target.elements.todoTitle.value;
  const desc = e.target.elements.todoDesc.value;
  const due = e.target.elements.todoDue.value;
  const priority = e.target.elements.todoPriority.value;
  const newTodo = new Todo(title, desc, due, priority, false);
  return newTodo;
};

const clearFieldOfTodo = (e) => {
  e.target.elements.todoTitle.value = '';
  e.target.elements.todoDesc.value = '';
  e.target.elements.todoDue.value = '';
  e.target.elements.todoPriority.value = '';
};

const saveTodo = (e, project, projects, formClassName, todo) => {
  if (formClassName === 'add-todo-form') {
    project.todos.push(createNewTodo(e));
  } else if (formClassName === 'edit-todo-form') {
    todo.title = e.target.elements.todoTitle.value;
    todo.description = e.target.elements.todoDesc.value;
    todo.dueDate = e.target.elements.todoDue.value;
    todo.priority = e.target.elements.todoPriority.value;
  }

  localStorage.setItem('projects', JSON.stringify(projects));
  clearFieldOfTodo(e);
  // window.location.reload();
  renderProjects(projects);
};

export default saveTodo;
