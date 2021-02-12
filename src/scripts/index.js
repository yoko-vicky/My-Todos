import '../scss/main.scss';
// import { formatDistance, subDays } from 'date-fns';
import addToggleToMoreBtn from './mymodules/addToggleToMoreBtn';
import { addProject } from './mymodules/addProject';
import getSavedProjectsFromLS from './mymodules/getSavedProjectsFromLS';
import renderProjects from './mymodules/renderProjects';
// import addTodo from './mymodules/addTodo';

const projects = getSavedProjectsFromLS();

addProject(projects);
addToggleToMoreBtn();
renderProjects(projects);
// addTodo(projects);
