import React from 'react';
import { inject, observer } from 'mobx-react';

import TodoList from './TodoList';

@inject('store')
@observer
class TodoMain extends React.Component {
  render() {
    const { store } = this.props;
    console.log('store', store);
    return (
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <TodoList todos={store.visibleTodos} />
      </section>
    );
  }
}

export default TodoMain;
