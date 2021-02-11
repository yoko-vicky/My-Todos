import '../scss/main.scss';
// import { formatDistance, subDays } from 'date-fns';
// import Todo from './mymodules/todo';


// const myTodo = new Todo('Wash the dished', 'Wash dishes', new Date(2021, 3, 1), 3, false);
// console.log(myTodo);

// CLICK MORE BUTTON TO OPEN EDIT FORM OF EACH TODO ITEM
const todoMoreBtn = document.querySelector('.todo__morebtn');
todoMoreBtn.addEventListener('click', () => {
  todoMoreBtn.nextElementSibling.classList.toggle('active');
});
