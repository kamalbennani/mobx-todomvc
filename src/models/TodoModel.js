import { observable } from 'mobx';

class TodoModel {
  id;
  @observable title;
  @observable isCompleted;

  constructor(store, id, title, isCompleted) {
    this.store = store;
    this.id = id;
    this.title = title;
    this.isCompleted = isCompleted;
  }

  toggle() {
    this.isCompleted = !this.isCompleted;
  }

  destroy() {
    this.store.todos.remove(this);
  }

  setTitle(title) {
    this.title = title;
  }
}

export default TodoModel;
