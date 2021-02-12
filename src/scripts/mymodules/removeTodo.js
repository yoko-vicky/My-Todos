// eslint-disable-next-line import/no-cycle
import renderProjects from './renderProjects';

const removeTodo = (todo, project, projects) => {
  const targetIndex = project.todos.findIndex(item => item.id === todo.id);
  if (targetIndex >= 0) {
    project.todos.splice(targetIndex, 1);
    localStorage.setItem('projects', JSON.stringify(projects));
    // window.location.reload();
    renderProjects(projects);
  }
};

export default removeTodo;
