import { observable, action, computed } from 'mobx';
import { uniqueId } from 'lodash';
import TodoModel from '../models/TodoModel';

export default class TodoStore {
  @observable todos = [];

  @action
  addTodo(todo) {
    this.todos.push(new TodoModel(this, uniqueId('TODO_'), todo, false));
  }

  @action
  toggleAll(checked) {
    this.todos.forEach(todo => (todo.completed = checked));
  }
}
