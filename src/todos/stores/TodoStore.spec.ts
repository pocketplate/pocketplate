import { Container } from 'inversify';
import { ITodo } from '../models/Todo';
import { TodoStore } from './TodoStore';
import { TodosService } from '../services/TodosService';

describe('TodoStore', () => {
  let todos: ITodo[];
  let todosService: TodosService;
  let todoStore: TodoStore;

  beforeEach(() => {
    todos = [];
    todosService = {
      getAll: () => Promise.resolve(todos)
    } as TodosService;

    const container = new Container();
    container.bind(TodosService).toConstantValue(todosService);
    container.bind(TodoStore).toSelf().inSingletonScope();
    todoStore = container.resolve(TodoStore);
  });

  describe('getAll', () => {
    it('should get todos', async () => {
      await todoStore.getAll();
      expect(todoStore.getTodos()).toEqual(todos);
    });
  });
});
