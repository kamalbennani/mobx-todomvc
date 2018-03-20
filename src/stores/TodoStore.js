import { observable, action, computed } from 'mobx';
import { uniqueId } from 'lodash';
import TodoModel from '../models/TodoModel';

export const FILTERS = {
  ALL_TODOS: 'ALL_TODOS',
  ACTIVE_TODOS: 'ACTIVE_TODOS',
  COMPLETE_TODOS: 'COMPLETE_TODOS',
};

export default class TodoStore {
  @observable todos = [];
  @observable filter = FILTERS.ALL_TODOS;

  @action
  addTodo(todo) {
    this.todos.push(new TodoModel(this, uniqueId('TODO_'), todo, false));
  }

  @action
  toggleAll(checked) {
    this.todos.forEach(todo => (todo.completed = checked));
  }

  @computed
  get visibleTodos() {
    switch (this.filter) {
      case FILTERS.ALL_TODOS:
        return this.todos;
      case FILTERS.ACTIVE_TODOS:
        return this.activeTodos;
      case FILTERS.COMPLETE_TODOS:
        return this.completedTodos;
      default:
        return this.todos;
    }
  }

  @computed
  get activeTodos() {
    return this.todos.filter(todo => !todo.isCompleted);
  }

  @computed
  get completedTodos() {
    return this.todos.filter(todo => todo.isCompleted);
  }
}
