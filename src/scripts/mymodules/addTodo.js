import Todo from './todoConstructor';

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

const addTodo = (e, project, projects) => {
  project.todos.push(createNewTodo(e));
  localStorage.setItem('projects', JSON.stringify(projects));
  clearFieldOfTodo(e);
  window.location.reload();
};

export default addTodo;
