import '../scss/main.scss';
// import { formatDistance, subDays } from 'date-fns';
import { addProject } from './mymodules/addProject';
import getSavedProjectsFromLS from './mymodules/getSavedProjectsFromLS';
import renderProjects from './mymodules/renderProjects';

const projects = getSavedProjectsFromLS();

addProject(projects);
renderProjects(projects);
