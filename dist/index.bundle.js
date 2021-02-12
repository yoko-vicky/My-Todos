/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _mymodules_addToggleToMoreBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mymodules/addToggleToMoreBtn */ \"./src/scripts/mymodules/addToggleToMoreBtn.js\");\n/* harmony import */ var _mymodules_addProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mymodules/addProject */ \"./src/scripts/mymodules/addProject.js\");\n/* harmony import */ var _mymodules_getSavedProjectsFromLS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mymodules/getSavedProjectsFromLS */ \"./src/scripts/mymodules/getSavedProjectsFromLS.js\");\n/* harmony import */ var _mymodules_renderProjects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mymodules/renderProjects */ \"./src/scripts/mymodules/renderProjects.js\");\n // import { formatDistance, subDays } from 'date-fns';\n\n\n\n\n // import addTodo from './mymodules/addTodo';\n\nconst projects = (0,_mymodules_getSavedProjectsFromLS__WEBPACK_IMPORTED_MODULE_3__.default)();\n(0,_mymodules_addProject__WEBPACK_IMPORTED_MODULE_2__.addProject)(projects);\n(0,_mymodules_addToggleToMoreBtn__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_mymodules_renderProjects__WEBPACK_IMPORTED_MODULE_4__.default)(projects); // addTodo(projects);\n\n//# sourceURL=webpack://my-todo-list/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/mymodules/addProject.js":
/*!*********************************************!*\
  !*** ./src/scripts/mymodules/addProject.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProject\": function() { return /* binding */ addProject; },\n/* harmony export */   \"addProjectObjToProjects\": function() { return /* binding */ addProjectObjToProjects; },\n/* harmony export */   \"addProjectsToLocalStorage\": function() { return /* binding */ addProjectsToLocalStorage; }\n/* harmony export */ });\n/* harmony import */ var _projectConstructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectConstructor */ \"./src/scripts/mymodules/projectConstructor.js\");\n/* harmony import */ var _renderProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderProjects */ \"./src/scripts/mymodules/renderProjects.js\");\n\n\n\nconst addProjectObjToProjects = (project, projects) => {\n  projects.push(project);\n};\n\nconst addProjectsToLocalStorage = projects => {\n  localStorage.setItem('projects', JSON.stringify(projects));\n};\n\nconst addProject = projects => {\n  const form = document.querySelector('.add-project-form');\n  form.addEventListener('submit', e => {\n    e.preventDefault();\n    const newProject = new _projectConstructor__WEBPACK_IMPORTED_MODULE_0__.default(e.target.elements.prTitle.value, e.target.elements.prDesc.value);\n    addProjectObjToProjects(newProject, projects);\n    addProjectsToLocalStorage(projects);\n    (0,_renderProjects__WEBPACK_IMPORTED_MODULE_1__.default)(projects);\n  });\n};\n\n\n\n//# sourceURL=webpack://my-todo-list/./src/scripts/mymodules/addProject.js?");

/***/ }),

/***/ "./src/scripts/mymodules/addTodo.js":
/*!******************************************!*\
  !*** ./src/scripts/mymodules/addTodo.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todoConstructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoConstructor */ \"./src/scripts/mymodules/todoConstructor.js\");\n\n\nconst createNewTodo = e => {\n  const title = e.target.elements.todoTitle.value;\n  const desc = e.target.elements.todoDesc.value;\n  const due = e.target.elements.todoDue.value;\n  const priority = e.target.elements.todoPriority.value;\n  const newTodo = new _todoConstructor__WEBPACK_IMPORTED_MODULE_0__.default(title, desc, due, priority, false);\n  return newTodo;\n};\n\nconst clearFieldOfTodo = e => {\n  e.target.elements.todoTitle.value = '';\n  e.target.elements.todoDesc.value = '';\n  e.target.elements.todoDue.value = '';\n  e.target.elements.todoPriority.value = '';\n};\n\nconst addTodo = (e, project, projects) => {\n  project.todos.push(createNewTodo(e));\n  localStorage.setItem('projects', JSON.stringify(projects));\n  clearFieldOfTodo(e);\n  window.location.reload();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (addTodo);\n\n//# sourceURL=webpack://my-todo-list/./src/scripts/mymodules/addTodo.js?");

/***/ }),

/***/ "./src/scripts/mymodules/addToggleToMoreBtn.js":
/*!*****************************************************!*\
  !*** ./src/scripts/mymodules/addToggleToMoreBtn.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst addToggleToMoreBtn = () => {\n  const todoMoreBtn = document.querySelector('.todo__morebtn');\n  todoMoreBtn.addEventListener('click', () => {\n    todoMoreBtn.nextElementSibling.classList.toggle('active');\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (addToggleToMoreBtn);\n\n//# sourceURL=webpack://my-todo-list/./src/scripts/mymodules/addToggleToMoreBtn.js?");

/***/ }),

/***/ "./src/scripts/mymodules/getSavedProjectsFromLS.js":
/*!*********************************************************!*\
  !*** ./src/scripts/mymodules/getSavedProjectsFromLS.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst getSavedProjectsFromLS = () => {\n  const projectsJSON = localStorage.getItem('projects');\n\n  try {\n    return projectsJSON ? JSON.parse(projectsJSON) : [];\n  } catch (error) {\n    return [];\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getSavedProjectsFromLS); // instead of empty array, can set default value\n\n//# sourceURL=webpack://my-todo-list/./src/scripts/mymodules/getSavedProjectsFromLS.js?");

/***/ }),

/***/ "./src/scripts/mymodules/projectConstructor.js":
/*!*****************************************************!*\
  !*** ./src/scripts/mymodules/projectConstructor.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/index.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Project {\n  constructor(title, description) {\n    this.id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)();\n    this.title = title;\n    this.description = description;\n    this.todos = [];\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\n\n//# sourceURL=webpack://my-todo-list/./src/scripts/mymodules/projectConstructor.js?");

/***/ }),

/***/ "./src/scripts/mymodules/removeProject.js":
/*!************************************************!*\
  !*** ./src/scripts/mymodules/removeProject.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst removeProject = (projectId, projects) => {\n  const targetIndex = projects.findIndex(project => project.id === projectId);\n\n  if (targetIndex >= 0) {\n    projects.splice(targetIndex, 1);\n    localStorage.setItem('projects', JSON.stringify(projects));\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (removeProject);\n\n//# sourceURL=webpack://my-todo-list/./src/scripts/mymodules/removeProject.js?");

/***/ }),

/***/ "./src/scripts/mymodules/renderProjects.js":
/*!*************************************************!*\
  !*** ./src/scripts/mymodules/renderProjects.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _removeProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeProject */ \"./src/scripts/mymodules/removeProject.js\");\n/* harmony import */ var _addTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTodo */ \"./src/scripts/mymodules/addTodo.js\");\n\n\n\nconst generatePrFieldDOM = (inputTitle, inputType, inputName) => {\n  const prField = document.createElement('div');\n  prField.classList.add('project__field');\n  const span = document.createElement('span');\n  span.textContent = inputTitle;\n  const input = document.createElement('input');\n  input.setAttribute('type', inputType);\n  input.setAttribute('name', inputName);\n  input.required = true;\n  prField.appendChild(span);\n  prField.appendChild(input);\n  return prField;\n};\n\nconst generateFormDOM = (formClassName, project, projects) => {\n  const form = document.createElement('form');\n  form.classList.add(formClassName, 'project__form');\n  form.setAttribute('data-project-id', project.id);\n  form.appendChild(generatePrFieldDOM('Title', 'text', 'todoTitle'));\n  form.appendChild(generatePrFieldDOM('Description', 'text', 'todoDesc'));\n  form.appendChild(generatePrFieldDOM('Due', 'date', 'todoDue'));\n  const prFieldForPriority = document.createElement('div');\n  prFieldForPriority.classList.add('project__field');\n  prFieldForPriority.innerHTML = \"\\n  <span>Priority:</span>\\n  <select name=\\\"todoPriority\\\">\\n    <option value=\\\"high\\\">High</option>\\n    <option value=\\\"middle\\\">Middle</option>\\n    <option value=\\\"low\\\">Low</option>\\n  </select>\\n  \";\n  form.appendChild(prFieldForPriority);\n  const prSaveTodoBtn = document.createElement('button');\n  prSaveTodoBtn.setAttribute('type', 'submit');\n  prSaveTodoBtn.classList.add('btn');\n  prSaveTodoBtn.textContent = 'Save Todo';\n  form.appendChild(prSaveTodoBtn);\n  form.addEventListener('submit', e => {\n    e.preventDefault();\n    (0,_addTodo__WEBPACK_IMPORTED_MODULE_1__.default)(e, project, projects);\n  });\n  return form;\n};\n\nconst generateTodoMoreDOM = (todo, project, projects) => {\n  const todoMoreItem = document.createElement('div');\n  todoMoreItem.classList.add('todo__more');\n  const todoDesc = document.createElement('p');\n  todoDesc.classList.add('todo__desc');\n  todoDesc.textContent = todo.description;\n  todoMoreItem.appendChild(todoDesc);\n  todoMoreItem.appendChild(generateFormDOM('edit-todo-form', project, projects));\n  return todoMoreItem;\n};\n\nconst generateTodoItemDOM = (todo, project, projects) => {\n  const todoItem = document.createElement('div');\n  todoItem.classList.add('todo', todo.priority);\n  const todoRmBtn = document.createElement('button');\n  todoRmBtn.classList.add('todo__rmbtn');\n  todoRmBtn.textContent = 'x';\n  const todoDue = document.createElement('div');\n  todoDue.classList.add('todo__due');\n  todoDue.textContent = todo.dueDate;\n  const todoTitleCover = document.createElement('div');\n  todoTitleCover.classList.add('todo__title-cover');\n  const todoCompCheckbox = document.createElement('input');\n  todoCompCheckbox.setAttribute('type', 'checkbox');\n  todoCompCheckbox.classList.add('todo__comp-checkbox');\n  todoCompCheckbox.checked = todo.completed;\n  const todoTitle = document.createElement('h3');\n  todoTitle.classList.add('todo__title');\n  todoTitle.textContent = todo.title;\n  todoTitleCover.appendChild(todoCompCheckbox);\n  todoTitleCover.appendChild(todoTitle);\n  const todoMoreBtn = document.createElement('button');\n  todoMoreBtn.classList.add('todo__morebtn', 'btn');\n  todoMoreBtn.textContent = 'More';\n  todoItem.appendChild(todoRmBtn);\n  todoItem.appendChild(todoDue);\n  todoItem.appendChild(todoTitleCover);\n  todoItem.appendChild(todoMoreBtn);\n  todoItem.appendChild(generateTodoMoreDOM(todo, project, projects));\n  return todoItem;\n};\n\nconst generatePrTodosDOM = (project, projects) => {\n  const projectTodos = document.createElement('div');\n  projectTodos.classList.add('project__todos');\n\n  if (project.todos.length > 0) {\n    project.todos.forEach(todo => {\n      projectTodos.appendChild(generateTodoItemDOM(todo, project, projects));\n    });\n  }\n\n  return projectTodos;\n};\n\nconst generateProjectItemDOM = (project, projects) => {\n  const prItem = document.createElement('div');\n  prItem.classList.add('project');\n  const prRmBtn = document.createElement('button');\n  prRmBtn.classList.add('project__rmbtn');\n  prRmBtn.textContent = 'x';\n  prRmBtn.addEventListener('click', () => {\n    (0,_removeProject__WEBPACK_IMPORTED_MODULE_0__.default)(project.id, projects);\n    window.location.reload();\n  });\n  const prTitle = document.createElement('h2');\n  prTitle.classList.add('project__title');\n  prTitle.textContent = project.title;\n  const prDesc = document.createElement('div');\n  prDesc.classList.add('project__desc');\n  prDesc.textContent = project.description;\n  prItem.appendChild(prRmBtn);\n  prItem.appendChild(prTitle);\n  prItem.appendChild(prDesc);\n  prItem.appendChild(generatePrTodosDOM(project, projects));\n  prItem.appendChild(generateFormDOM('add-todo-form', project, projects));\n  return prItem;\n};\n\nconst projectsContainer = document.getElementById('projects');\n\nconst renderProjects = projects => {\n  projectsContainer.innerHTML = '';\n  projects.forEach(project => {\n    projectsContainer.appendChild(generateProjectItemDOM(project, projects));\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderProjects);\n\n//# sourceURL=webpack://my-todo-list/./src/scripts/mymodules/renderProjects.js?");

/***/ }),

/***/ "./src/scripts/mymodules/todoConstructor.js":
/*!**************************************************!*\
  !*** ./src/scripts/mymodules/todoConstructor.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Todo {\n  constructor(title, description, dueDate, priority, completed = false) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.completed = completed;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todo);\n\n//# sourceURL=webpack://my-todo-list/./src/scripts/mymodules/todoConstructor.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \*********************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n*::after,\\n*::before {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: inherit;\\n}\\n\\nhtml {\\n  scroll-behavior: smooth;\\n}\\n\\nbody {\\n  box-sizing: border-box;\\n}\\n\\nul {\\n  list-style-type: none;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\na {\\n  text-decoration: none;\\n  color: #202020;\\n  transition: all 0.4s;\\n}\\na:hover {\\n  opacity: 0.8;\\n}\\n\\nimg {\\n  max-width: 100%;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\nhtml {\\n  font-size: 50%;\\n}\\n@media only screen and (min-width: 768px) {\\n  html {\\n    font-size: 62.5%;\\n  }\\n}\\n\\nbody {\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  line-height: 1.5;\\n  font-size: 1.5rem;\\n  letter-spacing: 0.2px;\\n  color: #202020;\\n}\\n\\np {\\n  font-size: 1.5rem;\\n}\\n\\n.btn {\\n  display: inline-block;\\n  background: #202020;\\n  padding: 0.6rem;\\n  color: #fff;\\n  width: 100%;\\n  margin: 0.6rem auto;\\n  font-family: inherit;\\n  text-transform: uppercase;\\n  font-weight: bold;\\n  cursor: pointer;\\n  border: 1px solid black;\\n  border-radius: 3px;\\n  transition: all 0.4s;\\n}\\n.btn:hover {\\n  background: #fff;\\n  color: #202020;\\n}\\n\\n.container {\\n  width: 94%;\\n  max-width: 120rem;\\n  margin: 4rem auto;\\n}\\n\\n.header {\\n  width: 100%;\\n  margin: 0 auto;\\n}\\n\\n.main-heading {\\n  font-size: 6rem;\\n  text-align: center;\\n  margin: 0 auto 1rem;\\n  line-height: 1;\\n  text-transform: uppercase;\\n}\\n\\n.footer {\\n  text-align: center;\\n  padding: 1rem 0;\\n  width: 100%;\\n  margin: 0 auto;\\n  font-size: 1.2rem;\\n  color: #777;\\n  text-transform: uppercase;\\n}\\n.footer a {\\n  color: #777;\\n  text-decoration: underline;\\n}\\n\\n.projects {\\n  display: grid;\\n  grid-gap: 2rem;\\n}\\n@media only screen and (min-width: 768px) {\\n  .projects {\\n    grid-template-columns: repeat(2, 1fr);\\n  }\\n}\\n@media only screen and (min-width: 960px) {\\n  .projects {\\n    grid-template-columns: repeat(3, 1fr);\\n  }\\n}\\n\\n.project {\\n  border: 5px solid #ccc;\\n  border-radius: 3px;\\n  text-align: center;\\n  padding: 2rem;\\n  position: relative;\\n}\\n.project__rmbtn {\\n  position: absolute;\\n  top: 1rem;\\n  right: 1rem;\\n}\\n.project__title {\\n  text-transform: uppercase;\\n}\\n.project__desc {\\n  color: #777;\\n  font-size: 1.3rem;\\n  text-align: left;\\n}\\n.project__form {\\n  display: block;\\n  width: 100%;\\n  text-align: left;\\n  border-radius: 3px;\\n  padding: 1.6rem;\\n}\\n.project__form.add-todo-form {\\n  background: rgba(32, 32, 32, 0.2);\\n  margin: 1rem auto 2rem;\\n}\\n.project__form.edit-todo-form {\\n  background: #fff;\\n  margin: 1rem auto 0;\\n}\\n.project__form.add-project-form {\\n  width: 94%;\\n  max-width: 54rem;\\n  margin: 0 auto 5rem;\\n}\\n.project__field {\\n  width: 100%;\\n  margin: 0 auto 0.4rem;\\n}\\n.project__field span {\\n  display: block;\\n  margin-right: 0.4rem;\\n  font-size: 1.2rem;\\n}\\n.project__field input,\\n.project__field select,\\n.project__field textarea {\\n  width: 100%;\\n  padding: 0.4rem;\\n}\\n.project__todos {\\n  margin: 1rem auto 0;\\n}\\n\\n.todo {\\n  position: relative;\\n  text-align: left;\\n  padding: 1rem;\\n  background: #f6f6f6;\\n  margin: 0 auto 1rem;\\n  border: 2px solid #f6f6f6;\\n}\\n.todo.high {\\n  background: rgba(211, 82, 102, 0.4);\\n}\\n.todo.middle {\\n  background: rgba(211, 82, 102, 0.1);\\n}\\n.todo__rmbtn {\\n  position: absolute;\\n  top: 1rem;\\n  right: 1rem;\\n}\\n.todo__due {\\n  font-size: 1.2rem;\\n  font-style: italic;\\n  margin: 0 auto 0.4rem;\\n}\\n.todo__title-cover {\\n  display: flex;\\n  align-items: center;\\n  justify-content: flex-start;\\n}\\n.todo__comp-checkbox {\\n  margin-right: 1rem;\\n}\\n.todo__title {\\n  text-transform: uppercase;\\n  margin: 0 0 0.4rem;\\n  line-height: 1;\\n}\\n.todo__more {\\n  display: none;\\n  margin-top: 1rem;\\n}\\n.todo__more.active {\\n  display: block;\\n}\\n.todo__desc {\\n  font-size: 1.3rem;\\n  line-height: 1.4;\\n  text-align: left;\\n  margin: 0 auto 0.6rem;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-todo-list/./src/scss/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://my-todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://my-todo-list/./src/scss/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://my-todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/uuid/index.js":
/*!************************************!*\
  !*** ./node_modules/uuid/index.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var v1 = __webpack_require__(/*! ./v1 */ \"./node_modules/uuid/v1.js\");\nvar v4 = __webpack_require__(/*! ./v4 */ \"./node_modules/uuid/v4.js\");\n\nvar uuid = v4;\nuuid.v1 = v1;\nuuid.v4 = v4;\n\nmodule.exports = uuid;\n\n\n//# sourceURL=webpack://my-todo-list/./node_modules/uuid/index.js?");

/***/ }),

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/***/ (function(module) {

eval("/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\nvar byteToHex = [];\nfor (var i = 0; i < 256; ++i) {\n  byteToHex[i] = (i + 0x100).toString(16).substr(1);\n}\n\nfunction bytesToUuid(buf, offset) {\n  var i = offset || 0;\n  var bth = byteToHex;\n  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4\n  return ([\n    bth[buf[i++]], bth[buf[i++]],\n    bth[buf[i++]], bth[buf[i++]], '-',\n    bth[buf[i++]], bth[buf[i++]], '-',\n    bth[buf[i++]], bth[buf[i++]], '-',\n    bth[buf[i++]], bth[buf[i++]], '-',\n    bth[buf[i++]], bth[buf[i++]],\n    bth[buf[i++]], bth[buf[i++]],\n    bth[buf[i++]], bth[buf[i++]]\n  ]).join('');\n}\n\nmodule.exports = bytesToUuid;\n\n\n//# sourceURL=webpack://my-todo-list/./node_modules/uuid/lib/bytesToUuid.js?");

/***/ }),

/***/ "./node_modules/uuid/lib/rng-browser.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/***/ (function(module) {

eval("// Unique ID creation requires a high quality random # generator.  In the\n// browser this is a little complicated due to unknown quality of Math.random()\n// and inconsistent support for the `crypto` API.  We do the best we can via\n// feature-detection\n\n// getRandomValues needs to be invoked in a context where \"this\" is a Crypto\n// implementation. Also, find the complete implementation of crypto on IE11.\nvar getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||\n                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));\n\nif (getRandomValues) {\n  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto\n  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef\n\n  module.exports = function whatwgRNG() {\n    getRandomValues(rnds8);\n    return rnds8;\n  };\n} else {\n  // Math.random()-based (RNG)\n  //\n  // If all else fails, use Math.random().  It's fast, but is of unspecified\n  // quality.\n  var rnds = new Array(16);\n\n  module.exports = function mathRNG() {\n    for (var i = 0, r; i < 16; i++) {\n      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;\n      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;\n    }\n\n    return rnds;\n  };\n}\n\n\n//# sourceURL=webpack://my-todo-list/./node_modules/uuid/lib/rng-browser.js?");

/***/ }),

/***/ "./node_modules/uuid/v1.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v1.js ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var rng = __webpack_require__(/*! ./lib/rng */ \"./node_modules/uuid/lib/rng-browser.js\");\nvar bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ \"./node_modules/uuid/lib/bytesToUuid.js\");\n\n// **`v1()` - Generate time-based UUID**\n//\n// Inspired by https://github.com/LiosK/UUID.js\n// and http://docs.python.org/library/uuid.html\n\nvar _nodeId;\nvar _clockseq;\n\n// Previous uuid creation time\nvar _lastMSecs = 0;\nvar _lastNSecs = 0;\n\n// See https://github.com/uuidjs/uuid for API details\nfunction v1(options, buf, offset) {\n  var i = buf && offset || 0;\n  var b = buf || [];\n\n  options = options || {};\n  var node = options.node || _nodeId;\n  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;\n\n  // node and clockseq need to be initialized to random values if they're not\n  // specified.  We do this lazily to minimize issues related to insufficient\n  // system entropy.  See #189\n  if (node == null || clockseq == null) {\n    var seedBytes = rng();\n    if (node == null) {\n      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)\n      node = _nodeId = [\n        seedBytes[0] | 0x01,\n        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]\n      ];\n    }\n    if (clockseq == null) {\n      // Per 4.2.2, randomize (14 bit) clockseq\n      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;\n    }\n  }\n\n  // UUID timestamps are 100 nano-second units since the Gregorian epoch,\n  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so\n  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'\n  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.\n  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();\n\n  // Per 4.2.1.2, use count of uuid's generated during the current clock\n  // cycle to simulate higher resolution clock\n  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;\n\n  // Time since last uuid creation (in msecs)\n  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;\n\n  // Per 4.2.1.2, Bump clockseq on clock regression\n  if (dt < 0 && options.clockseq === undefined) {\n    clockseq = clockseq + 1 & 0x3fff;\n  }\n\n  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new\n  // time interval\n  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {\n    nsecs = 0;\n  }\n\n  // Per 4.2.1.2 Throw error if too many uuids are requested\n  if (nsecs >= 10000) {\n    throw new Error('uuid.v1(): Can\\'t create more than 10M uuids/sec');\n  }\n\n  _lastMSecs = msecs;\n  _lastNSecs = nsecs;\n  _clockseq = clockseq;\n\n  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch\n  msecs += 12219292800000;\n\n  // `time_low`\n  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;\n  b[i++] = tl >>> 24 & 0xff;\n  b[i++] = tl >>> 16 & 0xff;\n  b[i++] = tl >>> 8 & 0xff;\n  b[i++] = tl & 0xff;\n\n  // `time_mid`\n  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;\n  b[i++] = tmh >>> 8 & 0xff;\n  b[i++] = tmh & 0xff;\n\n  // `time_high_and_version`\n  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version\n  b[i++] = tmh >>> 16 & 0xff;\n\n  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)\n  b[i++] = clockseq >>> 8 | 0x80;\n\n  // `clock_seq_low`\n  b[i++] = clockseq & 0xff;\n\n  // `node`\n  for (var n = 0; n < 6; ++n) {\n    b[i + n] = node[n];\n  }\n\n  return buf ? buf : bytesToUuid(b);\n}\n\nmodule.exports = v1;\n\n\n//# sourceURL=webpack://my-todo-list/./node_modules/uuid/v1.js?");

/***/ }),

/***/ "./node_modules/uuid/v4.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var rng = __webpack_require__(/*! ./lib/rng */ \"./node_modules/uuid/lib/rng-browser.js\");\nvar bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ \"./node_modules/uuid/lib/bytesToUuid.js\");\n\nfunction v4(options, buf, offset) {\n  var i = buf && offset || 0;\n\n  if (typeof(options) == 'string') {\n    buf = options === 'binary' ? new Array(16) : null;\n    options = null;\n  }\n  options = options || {};\n\n  var rnds = options.random || (options.rng || rng)();\n\n  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n  rnds[6] = (rnds[6] & 0x0f) | 0x40;\n  rnds[8] = (rnds[8] & 0x3f) | 0x80;\n\n  // Copy bytes to buffer, if provided\n  if (buf) {\n    for (var ii = 0; ii < 16; ++ii) {\n      buf[i + ii] = rnds[ii];\n    }\n  }\n\n  return buf || bytesToUuid(rnds);\n}\n\nmodule.exports = v4;\n\n\n//# sourceURL=webpack://my-todo-list/./node_modules/uuid/v4.js?");

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