import createElement from './utills';
import removeProject from './removeProject';
// eslint-disable-next-line import/no-cycle
import { saveTodo } from './saveTodo';
// eslint-disable-next-line import/no-cycle
import removeTodo from './removeTodo';

const generatePrFieldDOM = (inputTitle, inputType, inputName, formClassName, todo) => {
  const prField = createElement('div', 'project__field');
  const span = createElement('span', null, inputTitle.charAt(0).toUpperCase() + inputTitle.slice(1));

  const input = document.createElement('input');
  input.setAttribute('type', inputType);
  input.setAttribute('name', inputName);
  input.required = true;

  prField.appendChild(span);
  prField.appendChild(input);

  if (formClassName === 'edit-todo-form') {
    if (inputTitle === 'title') {
      input.value = todo.title;
    } else if (inputTitle === 'description') {
      input.value = todo.description;
    } else if (inputTitle === 'due') {
      input.value = todo.dueDate;
    }
  }

  return prField;
};

const generateFormDOM = (formClassName, project, projects, todo) => {
  const form = createElement('form', formClassName);
  form.classList.add('project__form');
  form.appendChild(generatePrFieldDOM('title', 'text', 'todoTitle', formClassName, todo));
  form.appendChild(generatePrFieldDOM('description', 'text', 'todoDesc', formClassName, todo));
  form.appendChild(generatePrFieldDOM('due', 'date', 'todoDue', formClassName, todo));
  const prFieldForPriority = createElement('div', 'project__field');
  prFieldForPriority.innerHTML = `
  <span>Priority:</span>
  <select name="todoPriority" class="todo__select__priority">
    <option value="high">High</option>
    <option value="middle">Middle</option>
    <option value="low">Low</option>
  </select>
  `;
  if (formClassName === 'edit-todo-form') {
    prFieldForPriority.querySelector('.todo__select__priority').value = todo.priority;
  }
  form.appendChild(prFieldForPriority);

  const prSaveTodoBtn = createElement('button', 'btn', 'Save Todo');
  prSaveTodoBtn.setAttribute('type', 'submit');
  prSaveTodoBtn.classList.add('save-todo-btn');
  form.appendChild(prSaveTodoBtn);

  form.addEventListener('submit', e => {
    e.preventDefault();
    saveTodo(e, project, projects, formClassName, todo);
    // eslint-disable-next-line no-use-before-define
    renderProjects(projects);
  });
  return form;
};

const generateTodoMoreDOM = (todo, project, projects) => {
  const todoMoreItem = createElement('div', 'todo__more');
  const todoDesc = createElement('p', 'todo__desc', todo.description);
  todoMoreItem.appendChild(todoDesc);
  todoMoreItem.appendChild(generateFormDOM('edit-todo-form', project, projects, todo));

  return todoMoreItem;
};

const generateTodoItemDOM = (todo, project, projects) => {
  const todoItem = createElement('div', 'todo');
  todoItem.classList.add(todo.priority);

  const todoRmBtn = createElement('button', 'todo__rmbtn', 'x');
  const todoDue = createElement('div', 'todo__due', todo.dueDate);
  const todoTitleCover = createElement('div', 'todo__title-cover');
  const todoCompCheckbox = createElement('input', 'todo__comp-checkbox');
  todoCompCheckbox.setAttribute('type', 'checkbox');
  todoCompCheckbox.checked = todo.completed;
  const todoTitle = createElement('h3', 'todo__title', todo.title);
  todoTitleCover.appendChild(todoCompCheckbox);
  todoTitleCover.appendChild(todoTitle);

  const todoMoreBtn = createElement('button', 'btn', 'More');
  todoMoreBtn.classList.add('todo__morebtn');

  todoItem.appendChild(todoRmBtn);
  todoItem.appendChild(todoDue);
  todoItem.appendChild(todoTitleCover);
  todoItem.appendChild(todoMoreBtn);
  todoItem.appendChild(generateTodoMoreDOM(todo, project, projects));

  todoRmBtn.addEventListener('click', () => {
    removeTodo(todo, project, projects);
    // eslint-disable-next-line no-use-before-define
    renderProjects(projects);
  });
  todoMoreBtn.addEventListener('click', () => {
    todoMoreBtn.nextElementSibling.classList.toggle('active');
  });

  todoCompCheckbox.addEventListener('change', e => {
    todo.completed = e.target.checked;
    localStorage.setItem('projects', JSON.stringify(projects));
    // eslint-disable-next-line no-use-before-define
    renderProjects(projects);
  });

  return todoItem;
};

const generatePrTodosDOM = (project, projects) => {
  const projectTodos = createElement('div', 'project__todos');

  if (project.todos.length > 0) {
    project.todos.forEach(todo => {
      projectTodos.appendChild(generateTodoItemDOM(todo, project, projects));
    });
  }

  return projectTodos;
};

const generateProjectItemDOM = (project, projects) => {
  const prItem = createElement('div', 'project');
  const prRmBtn = createElement('button', 'project__rmbtn', 'x');

  prRmBtn.addEventListener('click', () => {
    removeProject(project.id, projects);
    // eslint-disable-next-line no-use-before-define
    renderProjects(projects);
  });

  const prTitle = createElement('h2', 'project__title', project.title);
  const prDesc = createElement('div', 'project__desc', project.description);
  const addTodoBtn = createElement('button', 'btn', 'Add Todo');
  addTodoBtn.classList.add('add-todo-btn');

  prItem.appendChild(prRmBtn);
  prItem.appendChild(prTitle);
  prItem.appendChild(prDesc);
  prItem.appendChild(generatePrTodosDOM(project, projects));
  prItem.appendChild(addTodoBtn);
  prItem.appendChild(generateFormDOM('add-todo-form', project, projects, []));

  addTodoBtn.addEventListener('click', e => {
    e.target.nextElementSibling.classList.toggle('open');
    e.target.classList.toggle('open');
    // eslint-disable-next-line no-unused-expressions
    e.target.textContent === 'Add Todo' ? e.target.textContent = 'Close' : e.target.textContent = 'Add Todo';
  });
  return prItem;
};

const renderProjects = (projects) => {
  document.getElementById('projects').innerHTML = '';
  projects.forEach(project => {
    document.getElementById('projects').appendChild(generateProjectItemDOM(project, projects));
  });
};

export {
  // eslint-disable-next-line max-len
  generatePrFieldDOM, generateFormDOM, generateTodoMoreDOM, generateTodoItemDOM, generatePrTodosDOM, generateProjectItemDOM, renderProjects,
};
