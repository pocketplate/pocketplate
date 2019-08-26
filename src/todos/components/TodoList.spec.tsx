import * as React from 'react';
import { shallow, mount, ReactWrapper } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'inversify';
import { Provider } from 'inversify-react';
import { TodoStore } from '../stores/TodoStore';
import TodoList from './TodoList';
import { ITodo } from '../models/Todo';

describe('TodoList', () => {
  let todoStore: TodoStore;
  let container: Container;

  beforeEach(() => {
    todoStore = {
      getAll: () => undefined,
      getTodos: () => []
    } as TodoStore;

    container = new Container();
    container.bind(TodoStore).toConstantValue(todoStore);
  });

  describe('initialization', () => {
    it('should render with no error', () => {
      expect(() => shallow(<Provider container={container}><TodoList /></Provider>)).not.toThrowError();
    });
  });

  describe('TodoList', () => {
    let wrapper: ReactWrapper;

    beforeEach(() => {
      todoStore.getTodos = jest.fn(() => []);
      todoStore.getAll = jest.fn();
      expect(() => shallow(<Provider container={container}><TodoList /></Provider>)).not.toThrowError();

      wrapper = mount(
        <Provider container={container}>
          <BrowserRouter>
            <TodoList />
          </BrowserRouter>
        </Provider>
      );
    });

    describe('componentDidMount', () => {
      it('should retrieve todos on load', () => {
        expect(todoStore.getAll).toHaveBeenCalledTimes(1);
      });
    });

    describe('render', () => {
      it('should render as many todos as there is in store', () => {
        const todo1: ITodo = { id: 'allo' } as ITodo;
        const todo2: ITodo = { id: 'allo2' } as ITodo;
        todoStore.getTodos = jest.fn(() => [todo1, todo2]);
        wrapper.unmount().mount();
        const todos = wrapper.find('.todo');
        expect(todos.length).toBe(2);
      });
    });
  });
});
