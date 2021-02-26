// eslint-disable-next-line import/no-unresolved
import { v4 as uuidv4 } from 'uuid';

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
