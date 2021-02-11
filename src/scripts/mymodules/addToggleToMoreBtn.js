const addToggleToMoreBtn = () => {
  const todoMoreBtn = document.querySelector('.todo__morebtn');
  todoMoreBtn.addEventListener('click', () => {
    todoMoreBtn.nextElementSibling.classList.toggle('active');
  });
};

export default addToggleToMoreBtn;
