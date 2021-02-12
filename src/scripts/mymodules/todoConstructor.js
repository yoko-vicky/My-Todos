import { v4 as uuidv4 } from 'uuid';

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
