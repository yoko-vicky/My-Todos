import '../scss/main.scss';
import getSavedProjectsFromLS from './mymodules/getSavedProjectsFromLS';
import defaultTodos from './mymodules/defaultTodos';
import { renderProjects } from './mymodules/renderProjects';
import { addProject } from './mymodules/addProject';

const projects = getSavedProjectsFromLS();

if (projects.length === 0) {
  localStorage.setItem('projects', JSON.stringify(defaultTodos));
}

addProject(projects);
renderProjects(projects);
