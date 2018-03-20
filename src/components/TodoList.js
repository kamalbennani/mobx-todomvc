import React from 'react';
import { observer } from 'mobx-react';
import TodoItem from './TodoItem';

@observer
class TodoList extends React.Component {
  render() {
    return (
      <ul className="todo-list">
        {this.props.todos.map((todo, todoIdx) => (
          <TodoItem key={todoIdx} todo={todo} />
        ))}
      </ul>
    );
  }
}

export default TodoList;
