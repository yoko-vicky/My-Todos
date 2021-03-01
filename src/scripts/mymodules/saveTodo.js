import Todo from './todoConstructor';

const createNewTodo = (e) => {
  const { elements } = e.target;
  const title = elements.todoTitle.value;
  const desc = elements.todoDesc.value;
  const due = elements.todoDue.value;
  const priority = elements.todoPriority.value;
  const newTodo = new Todo(title, desc, due, priority, false);
  return newTodo;
};

const clearFieldOfTodo = (e) => {
  const { elements } = e.target;
  elements.todoTitle.value = '';
  elements.todoDesc.value = '';
  elements.todoDue.value = '';
  elements.todoPriority.value = '';
};

const saveTodo = (e, project, projects, formClassName, todo) => {
  if (formClassName === 'add-todo-form') {
    project.todos.push(createNewTodo(e));
  } else if (formClassName === 'edit-todo-form') {
    const { elements } = e.target;
    todo.title = elements.todoTitle.value;
    todo.description = elements.todoDesc.value;
    todo.dueDate = elements.todoDue.value;
    todo.priority = elements.todoPriority.value;
  }

  localStorage.setItem('projects', JSON.stringify(projects));
  clearFieldOfTodo(e);
};

export { saveTodo, createNewTodo, clearFieldOfTodo };
