import React, { Component } from 'react';
import 'todomvc-app-css/index.css';
import { inject, observer } from 'mobx-react';

import TodoMain from './TodoMain';
import TodoFooter from './TodoFooter';
import Input from './Input';

@inject('store')
@observer
class App extends Component {
  handleClick = todo => {
    this.props.store.addTodo(todo);
  };

  render() {
    const { store } = this.props;
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <Input
            className="new-todo"
            placeholder="What needs to be done?"
            onSave={this.handleClick}
          />
        </header>
        <TodoMain />
        <TodoFooter />
      </section>
    );
  }
}

export default App;
