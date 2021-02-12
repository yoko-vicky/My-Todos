const getSavedProjectsFromLS = () => {
  const projectsJSON = localStorage.getItem('projects');
  try {
    return projectsJSON ? JSON.parse(projectsJSON) : [];
  } catch (error) {
    return [];
  }
};

export default getSavedProjectsFromLS;
