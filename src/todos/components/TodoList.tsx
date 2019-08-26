import * as React from 'react';
import '../dependencies';
import { ITodoStore, TodoStore } from '../stores/TodoStore';
import { observer } from 'mobx-react';
import { resolve } from 'inversify-react';

@observer
export class TodoList extends React.Component {
  @resolve(TodoStore)
  todoStore: ITodoStore;

  componentDidMount() {
    this.todoStore.getAll();
  }

  render() {
    const todos = this.todoStore.getTodos().map(todo => <div className='todo' key={todo.id}>allo</div>);
    return (
      <div>
        <p>hello</p>
        {todos}
      </div>
    );
  }
}

export default TodoList;
