import Project from './projectConstructor';
import renderProjects from './renderProjects';

const addProjectObjToProjects = (project, projects) => {
  projects.push(project);
  renderProjects(projects);
};

const addProject = (projects) => {
  const form = document.querySelector('.add-project-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const newProject = new Project(e.target.elements.prTitle.value, e.target.elements.prDesc.value);
    addProjectObjToProjects(newProject, projects);
  });
};

export default addProject;
