class Todo {
  constructor(title, description = '', dueDate, priority = 1, completed = false) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;
  }
}

export default Todo;
