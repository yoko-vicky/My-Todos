const projectsContainer = document.getElementById('projects');

const generatePrFieldDOM = (inputTitle, inputType, inputName) => {
  const prField = document.createElement('div');
  prField.classList.add('project__field');
  const span = document.createElement('span');
  span.textContent = inputTitle;

  const input = document.createElement('input');
  input.setAttribute('type', inputType);
  input.setAttribute('name', inputName);
  input.required = true;

  prField.appendChild(span);
  prField.appendChild(input);

  return prField;
};

const generateFormDOM = (formClassName) => {
  const form = document.createElement('form');
  form.classList.add(formClassName, 'project__form');
  form.appendChild(generatePrFieldDOM('Title', 'text', 'todoTitle'));
  form.appendChild(generatePrFieldDOM('Description', 'text', 'todoDesc'));
  form.appendChild(generatePrFieldDOM('Due', 'date', 'todoDue'));
  const prFieldForPriority = document.createElement('div');
  prFieldForPriority.classList.add('project__field');
  prFieldForPriority.innerHTML = `
  <span>Priority:</span>
  <select name="todoPriority">
    <option value="1">High</option>
    <option value="2">Middle</option>
    <option value="3">Low</option>
  </select>
  `;
  form.appendChild(prFieldForPriority);
  const prSaveTodoBtn = document.createElement('button');
  prSaveTodoBtn.setAttribute('type', 'submit');
  prSaveTodoBtn.classList.add('btn');
  prSaveTodoBtn.textContent = 'Save Todo';
  form.appendChild(prSaveTodoBtn);

  return form;
};

const generateTodoMoreDOM = (todo) => {
  const todoMoreItem = document.createElement('div');
  todoMoreItem.classList.add('todo__more');

  const todoDesc = document.createElement('p');
  todoDesc.classList.add('todo__desc');
  todoDesc.textContent = todo.description;

  todoMoreItem.appendChild(todoDesc);
  todoMoreItem.appendChild(generateFormDOM('edit-todo-form'));

  return todoMoreItem;
};

const generateTodoItemDOM = (todo) => {
  const todoItem = document.createElement('div');
  todoItem.classList.add('todo', todo.priority);

  const todoRmBtn = document.createElement('button');
  todoRmBtn.classList.add('todo__rmbtn');
  todoRmBtn.textContent = 'x';

  const todoDue = document.createElement('div');
  todoDue.classList.add('todo__due');
  todoDue.textContent = todo.dueDate;

  const todoTitleCover = document.createElement('div');
  todoTitleCover.classList.add('todo__title-cover');
  const todoCompCheckbox = document.createElement('input');
  todoCompCheckbox.setAttribute('type', 'checkbox');
  todoCompCheckbox.classList.add('todo__comp-checkbox');
  todoCompCheckbox.checked = todo.completed;
  const todoTitle = document.createElement('h3');
  todoTitle.classList.add('todo__title');
  todoTitle.textContent = todo.title;
  todoTitleCover.appendChild(todoCompCheckbox);
  todoTitleCover.appendChild(todoTitle);

  const todoMoreBtn = document.createElement('button');
  todoMoreBtn.classList.add('todo__morebtn', 'btn');
  todoMoreBtn.textContent = 'More';

  todoItem.appendChild(todoRmBtn);
  todoItem.appendChild(todoDue);
  todoItem.appendChild(todoTitleCover);
  todoItem.appendChild(todoMoreBtn);
  todoItem.appendChild(generateTodoMoreDOM(todo));

  return todoItem;
};

const generatePrTodosDOM = (project) => {
  const projectTodos = document.createElement('div');
  projectTodos.classList.add('project__todos');

  if (project.todos.length > 0) {
    project.todos.forEach(todo => {
      projectTodos.appendChild(generateTodoItemDOM(todo));
    });
  }

  return projectTodos;
};

const generateProjectItemDOM = (project) => {
  const prItem = document.createElement('div');
  prItem.classList.add('project');

  const prRmBtn = document.createElement('button');
  prRmBtn.classList.add('project__rmbtn');
  prRmBtn.textContent = 'x';

  const prTitle = document.createElement('h2');
  prTitle.classList.add('project__title');
  prTitle.textContent = project.title;

  const prDesc = document.createElement('div');
  prDesc.classList.add('project__desc');
  prDesc.textContent = project.description;

  prItem.appendChild(prRmBtn);
  prItem.appendChild(prTitle);
  prItem.appendChild(prDesc);
  prItem.appendChild(generatePrTodosDOM(project));
  prItem.appendChild(generateFormDOM('add-todo-form'));
  return prItem;
};

const renderProjects = (projects) => {
  projects.forEach(project => {
    projectsContainer.appendChild(generateProjectItemDOM(project));
  });
};

export default renderProjects;
