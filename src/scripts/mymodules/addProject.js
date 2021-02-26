import Project from './projectConstructor';
import { renderProjects } from './renderProjects';

const addProjectObjToProjects = (project, projects) => {
  projects.push(project);
};

const addProjectsToLocalStorage = (projects) => {
  localStorage.setItem('projects', JSON.stringify(projects));
};

const clearFieldOfProject = (e) => {
  e.target.elements.prTitle.value = '';
  e.target.elements.prDesc.value = '';
};

const addProject = (projects) => {
  const form = document.querySelector('.add-project-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const newProject = new Project(e.target.elements.prTitle.value, e.target.elements.prDesc.value);
    addProjectObjToProjects(newProject, projects);
    addProjectsToLocalStorage(projects);
    clearFieldOfProject(e);
    renderProjects(projects);
  });
};

export {
  addProject, addProjectObjToProjects, addProjectsToLocalStorage, clearFieldOfProject,
};
