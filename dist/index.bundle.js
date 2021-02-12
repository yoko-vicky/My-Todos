/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _mymodules_getSavedProjectsFromLS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mymodules/getSavedProjectsFromLS */ \"./src/scripts/mymodules/getSavedProjectsFromLS.js\");\n/* harmony import */ var _mymodules_defaultTodos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mymodules/defaultTodos */ \"./src/scripts/mymodules/defaultTodos.js\");\n/* harmony import */ var _mymodules_renderProjects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mymodules/renderProjects */ \"./src/scripts/mymodules/renderProjects.js\");\n/* harmony import */ var _mymodules_addProject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mymodules/addProject */ \"./src/scripts/mymodules/addProject.js\");\n\n\n\n\n\nconst projects = (0,_mymodules_getSavedProjectsFromLS__WEBPACK_IMPORTED_MODULE_1__.default)();\n\nif (projects.length === 0) {\n  localStorage.setItem('projects', JSON.stringify(_mymodules_defaultTodos__WEBPACK_IMPORTED_MODULE_2__.default));\n}\n\n(0,_mymodules_renderProjects__WEBPACK_IMPORTED_MODULE_3__.default)(projects);\n(0,_mymodules_addProject__WEBPACK_IMPORTED_MODULE_4__.addProject)(projects);\n\n//# sourceURL=webpack://my-todo-list/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/mymodules/addProject.js":
/*!*********************************************!*\
  !*** ./src/scripts/mymodules/addProject.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProject\": function() { return /* binding */ addProject; },\n/* harmony export */   \"addProjectObjToProjects\": function() { return /* binding */ addProjectObjToProjects; },\n/* harmony export */   \"addProjectsToLocalStorage\": function() { return /* binding */ addProjectsToLocalStorage; }\n/* harmony export */ });\n/* harmony import */ var _projectConstructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectConstructor */ \"./src/scripts/mymodules/projectConstructor.js\");\n/* harmony import */ var _renderProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderProjects */ \"./src/scripts/mymodules/renderProjects.js\");\n\n\n\nconst addProjectObjToProjects = (project, projects) => {\n  projects.push(project);\n};\n\nconst addProjectsToLocalStorage = projects => {\n  localStorage.setItem('projects', JSON.stringify(projects));\n};\n\nconst clearFieldOfProject = e => {\n  e.target.elements.prTitle.value = '';\n  e.target.elements.prDesc.value = '';\n};\n\nconst addProject = projects => {\n  const form = document.querySelector('.add-project-form');\n  form.addEventListener('submit', e => {\n    e.preventDefault();\n    const newProject = new _projectConstructor__WEBPACK_IMPORTED_MODULE_0__.default(e.target.elements.prTitle.value, e.target.elements.prDesc.value);\n    addProjectObjToProjects(newProject, projects);\n    addProjectsToLocalStorage(projects);\n    clearFieldOfProject(e);\n    (0,_renderProjects__WEBPACK_IMPORTED_MODULE_1__.default)(projects);\n  });\n};\n\n\n\n//# sourceURL=webpack://my-todo-list/./src/scripts/mymodules/addProject.js?");

/***/ }),

/***/ "./src/scripts/mymodules/defaultTodos.js":
/*!***********************************************!*\
  !*** ./src/scripts/mymodules/defaultTodos.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst defaultTodos = [{\n  id: 'a6226fde-3ae0-40e6-bc20-ca64a3446159',\n  title: 'My Morning routine',\n  description: 'This is my morning routine',\n  todos: [{\n    id: 'f2a0143c-92ba-4c42-955c-85320f656f1d',\n    title: 'Make some cofee',\n    description: 'I need some coffee in the morning',\n    dueDate: '2021-08-31',\n    priority: 'high',\n    completed: false\n  }, {\n    id: '2e51d05c-9e0b-483e-98d4-431ef84c6395',\n    title: 'My new Todo',\n    description: 'This is my new Todo',\n    dueDate: '2021-02-27',\n    priority: 'middle',\n    completed: false\n  }, {\n    id: 'aad4f35d-6084-434b-b10e-5e75e7d19016',\n    title: 'Clean the room',\n    description: \"I don't like a messy room\",\n    dueDate: '2021-04-30',\n    priority: 'low',\n    completed: false\n  }]\n}, {\n  id: 'ddec606d-7457-437e-bb04-a4fe0ed85720',\n  title: 'My LunchTime Todos',\n  description: 'This is my lunch Time todos',\n  todos: [{\n    id: '79bf4dd1-a783-464e-90ee-f5988546653c',\n    title: 'Eat lunch',\n    description: 'I need to have delicious lunch',\n    dueDate: '2021-02-27',\n    priority: 'middle',\n    completed: false\n  }, {\n    id: '4b5d3d42-c7b9-43bc-ad18-779607845ebe',\n    title: 'Stretch my body',\n    description: 'After working in the morning, I want to stretch my body',\n    dueDate: '2021-03-20',\n    priority: 'high',\n    completed: false\n  }]\n}, {\n  id: 'ebc3f814-f067-43b1-82bd-da69de63037e',\n  title: 'My Evening Routine',\n  description: 'I have a lot of things to do in the evening',\n  todos: [{\n    id: 'bb69f5dc-7032-4297-8087-c9c925ae5d8e',\n    title: 'Cook dinner',\n    description: 'I need to prepare meal for my family members',\n    dueDate: '2021-03-13',\n    priority: 'high',\n    completed: false\n  }, {\n    id: '22ee35b5-73df-48f1-8849-148a3d8b6529',\n    title: 'Read book',\n    description: 'I like reading book',\n    dueDate: '2021-05-30',\n    priority: 'low',\n    completed: false\n  }, {\n    id: 'e2da1d37-c876-41a7-a57c-da6336bb2866',\n    title: 'Sleep well',\n    description: 'Sleeping is really important for me',\n    dueDate: '2021-04-24',\n    priority: 'middle',\n    completed: false\n  }]\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (defaultTodos);\n\n//# sourceURL=webpack://my-todo-list/./src/scripts/mymodules/defaultTodos.js?");

/***/ }),

/***/ "./src/scripts/mymodules/getSavedProjectsFromLS.js":
/*!*********************************************************!*\
  !*** ./src/scripts/mymodules/getSavedProjectsFromLS.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst getSavedProjectsFromLS = () => {\n  const projectsJSON = localStorage.getItem('projects');\n\n  try {\n    return projectsJSON ? JSON.parse(projectsJSON) : [];\n  } catch (error) {\n    return [];\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getSavedProjectsFromLS);\n\n//# sourceURL=webpack://my-todo-list/./src/scripts/mymodules/getSavedProjectsFromLS.js?");

/***/ }),

/***/ "./src/scripts/mymodules/projectConstructor.js":
/*!*****************************************************!*\
  !*** ./src/scripts/mymodules/projectConstructor.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Project {\n  constructor(title, description) {\n    // eslint-disable-next-line no-undef\n    this.id = uuidv4();\n    this.title = title;\n    this.description = description;\n    this.todos = [];\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\n\n//# sourceURL=webpack://my-todo-list/./src/scripts/mymodules/projectConstructor.js?");

/***/ }),

/***/ "./src/scripts/mymodules/removeProject.js":
/*!************************************************!*\
  !*** ./src/scripts/mymodules/removeProject.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst removeProject = (projectId, projects) => {\n  const targetIndex = projects.findIndex(project => project.id === projectId);\n\n  if (targetIndex >= 0) {\n    projects.splice(targetIndex, 1);\n    localStorage.setItem('projects', JSON.stringify(projects));\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (removeProject);\n\n//# sourceURL=webpack://my-todo-list/./src/scripts/mymodules/removeProject.js?");

/***/ }),

/***/ "./src/scripts/mymodules/removeTodo.js":
/*!*********************************************!*\
  !*** ./src/scripts/mymodules/removeTodo.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _renderProjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderProjects */ \"./src/scripts/mymodules/renderProjects.js\");\n// eslint-disable-next-line import/no-cycle\n\n\nconst removeTodo = (todo, project, projects) => {\n  const targetIndex = project.todos.findIndex(item => item.id === todo.id);\n\n  if (targetIndex >= 0) {\n    project.todos.splice(targetIndex, 1);\n    localStorage.setItem('projects', JSON.stringify(projects)); // window.location.reload();\n\n    (0,_renderProjects__WEBPACK_IMPORTED_MODULE_0__.default)(projects);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (removeTodo);\n\n//# sourceURL=webpack://my-todo-list/./src/scripts/mymodules/removeTodo.js?");

/***/ }),

/***/ "./src/scripts/mymodules/renderProjects.js":
/*!*************************************************!*\
  !*** ./src/scripts/mymodules/renderProjects.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _removeProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeProject */ \"./src/scripts/mymodules/removeProject.js\");\n/* harmony import */ var _saveTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saveTodo */ \"./src/scripts/mymodules/saveTodo.js\");\n/* harmony import */ var _removeTodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./removeTodo */ \"./src/scripts/mymodules/removeTodo.js\");\n\n // eslint-disable-next-line import/no-cycle\n\n\n\nconst generatePrFieldDOM = (inputTitle, inputType, inputName, formClassName, todo) => {\n  const prField = document.createElement('div');\n  prField.classList.add('project__field');\n  const span = document.createElement('span');\n  span.textContent = inputTitle.charAt(0).toUpperCase() + inputTitle.slice(1);\n  const input = document.createElement('input');\n  input.setAttribute('type', inputType);\n  input.setAttribute('name', inputName);\n  input.required = true;\n  prField.appendChild(span);\n  prField.appendChild(input);\n\n  if (formClassName === 'edit-todo-form') {\n    if (inputTitle === 'title') {\n      input.value = todo.title;\n    } else if (inputTitle === 'description') {\n      input.value = todo.description;\n    } else if (inputTitle === 'due') {\n      input.value = todo.dueDate;\n    }\n  }\n\n  return prField;\n};\n\nconst generateFormDOM = (formClassName, project, projects, todo) => {\n  const form = document.createElement('form');\n  form.classList.add(formClassName, 'project__form');\n  form.appendChild(generatePrFieldDOM('title', 'text', 'todoTitle', formClassName, todo));\n  form.appendChild(generatePrFieldDOM('description', 'text', 'todoDesc', formClassName, todo));\n  form.appendChild(generatePrFieldDOM('due', 'date', 'todoDue', formClassName, todo));\n  const prFieldForPriority = document.createElement('div');\n  prFieldForPriority.classList.add('project__field');\n  prFieldForPriority.innerHTML = \"\\n  <span>Priority:</span>\\n  <select name=\\\"todoPriority\\\" class=\\\"todo__select__priority\\\">\\n    <option value=\\\"high\\\">High</option>\\n    <option value=\\\"middle\\\">Middle</option>\\n    <option value=\\\"low\\\">Low</option>\\n  </select>\\n  \";\n\n  if (formClassName === 'edit-todo-form') {\n    prFieldForPriority.querySelector('.todo__select__priority').value = todo.priority;\n  }\n\n  form.appendChild(prFieldForPriority);\n  const prSaveTodoBtn = document.createElement('button');\n  prSaveTodoBtn.setAttribute('type', 'submit');\n  prSaveTodoBtn.classList.add('btn');\n  prSaveTodoBtn.textContent = 'Save Todo';\n  form.appendChild(prSaveTodoBtn);\n  form.addEventListener('submit', e => {\n    e.preventDefault();\n    (0,_saveTodo__WEBPACK_IMPORTED_MODULE_1__.default)(e, project, projects, formClassName, todo);\n  });\n  return form;\n};\n\nconst generateTodoMoreDOM = (todo, project, projects) => {\n  const todoMoreItem = document.createElement('div');\n  todoMoreItem.classList.add('todo__more');\n  const todoDesc = document.createElement('p');\n  todoDesc.classList.add('todo__desc');\n  todoDesc.textContent = todo.description;\n  todoMoreItem.appendChild(todoDesc);\n  todoMoreItem.appendChild(generateFormDOM('edit-todo-form', project, projects, todo));\n  return todoMoreItem;\n};\n\nconst generateTodoItemDOM = (todo, project, projects) => {\n  const todoItem = document.createElement('div');\n  todoItem.classList.add('todo', todo.priority);\n  const todoRmBtn = document.createElement('button');\n  todoRmBtn.classList.add('todo__rmbtn');\n  todoRmBtn.textContent = 'x';\n  const todoDue = document.createElement('div');\n  todoDue.classList.add('todo__due');\n  todoDue.textContent = todo.dueDate;\n  const todoTitleCover = document.createElement('div');\n  todoTitleCover.classList.add('todo__title-cover');\n  const todoCompCheckbox = document.createElement('input');\n  todoCompCheckbox.setAttribute('type', 'checkbox');\n  todoCompCheckbox.classList.add('todo__comp-checkbox');\n  todoCompCheckbox.checked = todo.completed;\n  const todoTitle = document.createElement('h3');\n  todoTitle.classList.add('todo__title');\n  todoTitle.textContent = todo.title;\n  todoTitleCover.appendChild(todoCompCheckbox);\n  todoTitleCover.appendChild(todoTitle);\n  const todoMoreBtn = document.createElement('button');\n  todoMoreBtn.classList.add('todo__morebtn', 'btn');\n  todoMoreBtn.textContent = 'More';\n  todoItem.appendChild(todoRmBtn);\n  todoItem.appendChild(todoDue);\n  todoItem.appendChild(todoTitleCover);\n  todoItem.appendChild(todoMoreBtn);\n  todoItem.appendChild(generateTodoMoreDOM(todo, project, projects));\n  todoRmBtn.addEventListener('click', () => (0,_removeTodo__WEBPACK_IMPORTED_MODULE_2__.default)(todo, project, projects));\n  todoMoreBtn.addEventListener('click', () => {\n    todoMoreBtn.nextElementSibling.classList.toggle('active');\n  });\n  return todoItem;\n};\n\nconst generatePrTodosDOM = (project, projects) => {\n  const projectTodos = document.createElement('div');\n  projectTodos.classList.add('project__todos');\n\n  if (project.todos.length > 0) {\n    project.todos.forEach(todo => {\n      projectTodos.appendChild(generateTodoItemDOM(todo, project, projects));\n    });\n  }\n\n  return projectTodos;\n};\n\nconst generateProjectItemDOM = (project, projects) => {\n  const prItem = document.createElement('div');\n  prItem.classList.add('project');\n  const prRmBtn = document.createElement('button');\n  prRmBtn.classList.add('project__rmbtn');\n  prRmBtn.textContent = 'x';\n  prRmBtn.addEventListener('click', () => {\n    (0,_removeProject__WEBPACK_IMPORTED_MODULE_0__.default)(project.id, projects); // window.location.reload();\n    // eslint-disable-next-line no-use-before-define\n\n    renderProjects(projects);\n  });\n  const prTitle = document.createElement('h2');\n  prTitle.classList.add('project__title');\n  prTitle.textContent = project.title;\n  const prDesc = document.createElement('div');\n  prDesc.classList.add('project__desc');\n  prDesc.textContent = project.description;\n  prItem.appendChild(prRmBtn);\n  prItem.appendChild(prTitle);\n  prItem.appendChild(prDesc);\n  prItem.appendChild(generatePrTodosDOM(project, projects));\n  prItem.appendChild(generateFormDOM('add-todo-form', project, projects, []));\n  return prItem;\n};\n\nconst projectsContainer = document.getElementById('projects');\n\nconst renderProjects = projects => {\n  projectsContainer.innerHTML = '';\n  projects.forEach(project => {\n    projectsContainer.appendChild(generateProjectItemDOM(project, projects));\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderProjects);\n\n//# sourceURL=webpack://my-todo-list/./src/scripts/mymodules/renderProjects.js?");

/***/ }),

/***/ "./src/scripts/mymodules/saveTodo.js":
/*!*******************************************!*\
  !*** ./src/scripts/mymodules/saveTodo.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todoConstructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoConstructor */ \"./src/scripts/mymodules/todoConstructor.js\");\n/* harmony import */ var _renderProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderProjects */ \"./src/scripts/mymodules/renderProjects.js\");\n // eslint-disable-next-line import/no-cycle\n\n\n\nconst createNewTodo = e => {\n  const title = e.target.elements.todoTitle.value;\n  const desc = e.target.elements.todoDesc.value;\n  const due = e.target.elements.todoDue.value;\n  const priority = e.target.elements.todoPriority.value;\n  const newTodo = new _todoConstructor__WEBPACK_IMPORTED_MODULE_0__.default(title, desc, due, priority, false);\n  return newTodo;\n};\n\nconst clearFieldOfTodo = e => {\n  e.target.elements.todoTitle.value = '';\n  e.target.elements.todoDesc.value = '';\n  e.target.elements.todoDue.value = '';\n  e.target.elements.todoPriority.value = '';\n};\n\nconst saveTodo = (e, project, projects, formClassName, todo) => {\n  if (formClassName === 'add-todo-form') {\n    project.todos.push(createNewTodo(e));\n  } else if (formClassName === 'edit-todo-form') {\n    todo.title = e.target.elements.todoTitle.value;\n    todo.description = e.target.elements.todoDesc.value;\n    todo.dueDate = e.target.elements.todoDue.value;\n    todo.priority = e.target.elements.todoPriority.value;\n  }\n\n  localStorage.setItem('projects', JSON.stringify(projects));\n  clearFieldOfTodo(e); // window.location.reload();\n\n  (0,_renderProjects__WEBPACK_IMPORTED_MODULE_1__.default)(projects);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (saveTodo);\n\n//# sourceURL=webpack://my-todo-list/./src/scripts/mymodules/saveTodo.js?");

/***/ }),

/***/ "./src/scripts/mymodules/todoConstructor.js":
/*!**************************************************!*\
  !*** ./src/scripts/mymodules/todoConstructor.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Todo {\n  constructor(title, description, dueDate, priority, completed = false) {\n    // eslint-disable-next-line no-undef\n    this.id = uuidv4();\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.completed = completed;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todo);\n\n//# sourceURL=webpack://my-todo-list/./src/scripts/mymodules/todoConstructor.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \*********************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n*::after,\\n*::before {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: inherit;\\n}\\n\\nhtml {\\n  scroll-behavior: smooth;\\n}\\n\\nbody {\\n  box-sizing: border-box;\\n}\\n\\nul {\\n  list-style-type: none;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\na {\\n  text-decoration: none;\\n  color: #202020;\\n  transition: all 0.4s;\\n}\\na:hover {\\n  opacity: 0.8;\\n}\\n\\nimg {\\n  max-width: 100%;\\n}\\n\\ninput,\\nbutton,\\ntextarea {\\n  margin: 0;\\n  padding: 0;\\n  background: none;\\n  border: none;\\n  border-radius: 0;\\n  outline: none;\\n  appearance: none;\\n  cursor: pointer;\\n}\\n\\nselect {\\n  margin: 0;\\n  padding: 0;\\n  background: none;\\n  border: none;\\n  border-radius: 0;\\n  outline: none;\\n  cursor: pointer;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\nhtml {\\n  font-size: 50%;\\n}\\n@media only screen and (min-width: 768px) {\\n  html {\\n    font-size: 62.5%;\\n  }\\n}\\n\\nbody {\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  line-height: 1.5;\\n  font-size: 1.5rem;\\n  letter-spacing: 0.2px;\\n  color: #202020;\\n}\\n\\np {\\n  font-size: 1.5rem;\\n}\\n\\n.btn {\\n  display: inline-block;\\n  background: #202020;\\n  padding: 0.6rem;\\n  color: #fff;\\n  width: 100%;\\n  margin: 0.6rem auto;\\n  font-family: inherit;\\n  text-transform: uppercase;\\n  font-weight: bold;\\n  cursor: pointer;\\n  border: 1px solid black;\\n  border-radius: 3px;\\n  transition: all 0.4s;\\n}\\n.btn:hover {\\n  background: #fff;\\n  color: #202020;\\n}\\n\\n.container {\\n  width: 94%;\\n  max-width: 120rem;\\n  margin: 4rem auto;\\n}\\n\\n.header {\\n  width: 100%;\\n  margin: 0 auto;\\n}\\n\\n.main-heading {\\n  font-size: 6rem;\\n  text-align: center;\\n  margin: 0 auto 1rem;\\n  line-height: 1;\\n  text-transform: uppercase;\\n}\\n\\n.footer {\\n  text-align: center;\\n  padding: 1rem 0;\\n  width: 100%;\\n  margin: 0 auto;\\n  font-size: 1.2rem;\\n  color: #777;\\n  text-transform: uppercase;\\n}\\n.footer a {\\n  color: #777;\\n  text-decoration: underline;\\n}\\n\\n.projects {\\n  display: grid;\\n  grid-gap: 2rem;\\n}\\n@media only screen and (min-width: 768px) {\\n  .projects {\\n    grid-template-columns: repeat(2, 1fr);\\n  }\\n}\\n@media only screen and (min-width: 960px) {\\n  .projects {\\n    grid-template-columns: repeat(3, 1fr);\\n  }\\n}\\n\\n.project {\\n  border: 5px solid #ccc;\\n  border-radius: 3px;\\n  text-align: center;\\n  padding: 2rem;\\n  position: relative;\\n}\\n.project__rmbtn {\\n  position: absolute;\\n  top: 1rem;\\n  right: 1rem;\\n  font-size: 2rem;\\n}\\n.project__title {\\n  text-transform: uppercase;\\n}\\n.project__desc {\\n  color: #777;\\n  font-size: 1.3rem;\\n  text-align: left;\\n}\\n.project__field {\\n  width: 100%;\\n  margin: 0 auto 0.4rem;\\n  color: #202020;\\n}\\n.project__field span {\\n  display: block;\\n  margin-right: 0.4rem;\\n  font-size: 1.2rem;\\n}\\n.project__field input,\\n.project__field select,\\n.project__field textarea {\\n  width: 100%;\\n  padding: 0.4rem;\\n  background: #fff;\\n  border-radius: 3px;\\n}\\n.project__form {\\n  display: block;\\n  width: 100%;\\n  text-align: left;\\n  border-radius: 3px;\\n  padding: 1.6rem;\\n}\\n.project__form.add-todo-form {\\n  background: rgba(32, 32, 32, 0.2);\\n  margin: 1rem auto 2rem;\\n}\\n.project__form.edit-todo-form {\\n  background: #fff;\\n  margin: 1rem auto 0;\\n}\\n.project__form.edit-todo-form input,\\n.project__form.edit-todo-form select,\\n.project__form.edit-todo-form textarea {\\n  border: 2px solid #ccc;\\n}\\n.project__form.add-project-form {\\n  width: 94%;\\n  max-width: 54rem;\\n  margin: 0 auto 5rem;\\n}\\n.project__form.add-project-form input,\\n.project__form.add-project-form select,\\n.project__form.add-project-form textarea {\\n  border: 2px solid #ccc;\\n}\\n.project__todos {\\n  margin: 1rem auto 0;\\n}\\n\\n.todo {\\n  position: relative;\\n  text-align: left;\\n  padding: 1rem;\\n  background: #f6f6f6;\\n  margin: 0 auto 1rem;\\n  border: 2px solid #f6f6f6;\\n}\\n.todo.high {\\n  background: #fe546a;\\n  color: #fff;\\n}\\n.todo.middle {\\n  background: #74f0d1;\\n}\\n.todo__rmbtn {\\n  position: absolute;\\n  top: 1rem;\\n  right: 1rem;\\n  font-size: 1.8rem;\\n}\\n.todo__due {\\n  font-size: 1.2rem;\\n  font-style: italic;\\n  margin: 0 auto 0.4rem;\\n}\\n.todo__title-cover {\\n  display: flex;\\n  align-items: center;\\n  justify-content: flex-start;\\n}\\n.todo__comp-checkbox {\\n  margin-right: 1rem;\\n}\\n.todo__title {\\n  text-transform: uppercase;\\n  margin: 0 0 0.4rem;\\n  line-height: 1;\\n}\\n.todo__more {\\n  display: none;\\n  margin-top: 1rem;\\n}\\n.todo__more.active {\\n  display: block;\\n}\\n.todo__desc {\\n  font-size: 1.3rem;\\n  line-height: 1.4;\\n  text-align: left;\\n  margin: 0 auto 0.6rem;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-todo-list/./src/scss/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://my-todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://my-todo-list/./src/scss/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://my-todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/scripts/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;