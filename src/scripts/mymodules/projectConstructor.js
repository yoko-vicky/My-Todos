class Project {
  constructor(title, description) {
    // eslint-disable-next-line no-undef
    this.id = uuidv4();
    this.title = title;
    this.description = description;
    this.todos = [];
  }
}

export default Project;
