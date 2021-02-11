import '../scss/main.scss';
// import { formatDistance, subDays } from 'date-fns';
import addToggleToMoreBtn from './mymodules/addToggleToMoreBtn';
import addProject from './mymodules/addProject';

const projects = [];
// const myTodo = new Todo('Wash the dished', 'Wash dishes', new Date(2021, 3, 1), 3, false);
// console.log(myTodo);
addProject(projects);
addToggleToMoreBtn();
