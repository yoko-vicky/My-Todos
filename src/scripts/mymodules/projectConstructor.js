class Project {
  constructor(title, description) {
    this.id = uuidv4();
    this.title = title;
    this.description = description;
    this.todos = [];
  }
}

export default Project;
