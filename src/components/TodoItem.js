import React from 'react';
import { observer } from 'mobx-react';
import cx from 'classnames';

@observer
class TodoItem extends React.Component {
  handleRemove = () => {
    this.props.todo.destroy();
  };

  handleToggle = () => {
    console.log('handleToggle');
    this.props.todo.toggle();
  };

  render() {
    const { todo } = this.props;
    return (
      <li className={cx({ completed: todo.isCompleted })}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.isCompleted}
            onChange={todo.handleToggle}
          />
          <label>{todo.title}</label>
          <button className="destroy" onClick={this.handleRemove} />
        </div>
        <input className="edit" value="Create a TodoMVC template" />
      </li>
    );
  }
}

export default TodoItem;
