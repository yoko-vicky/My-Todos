import '../scss/main.scss';
// import { formatDistance, subDays } from 'date-fns';
import addToggleToMoreBtn from './mymodules/addToggleToMoreBtn';
import addProject from './mymodules/addProject';
import getSavedProjectsFromLS from './mymodules/getSavedProjectsFromLS';
import renderProjects from './mymodules/renderProjects';

const projects = getSavedProjectsFromLS();

addProject(projects);
addToggleToMoreBtn();
renderProjects(projects);
