class Todo {
  constructor(title, description, dueDate, priority, completed = false) {
    this.id = uuidv4();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;
  }
}

export default Todo;
