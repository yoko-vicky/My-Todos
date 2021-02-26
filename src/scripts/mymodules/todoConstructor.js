// eslint-disable-next-line import/no-unresolved
import { v4 as uuidv4 } from 'uuid';

class Todo {
  constructor(title, description, dueDate, priority, completed = false) {
    // eslint-disable-next-line no-undef
    this.id = uuidv4();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;
  }
}

export default Todo;
