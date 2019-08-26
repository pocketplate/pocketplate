import { TodosService } from './TodosService';
import { Container } from 'inversify';
import { ITodo } from '../models/Todo';

describe('TodosService', () => {
  const A_SERVER_URL = 'patate';
  let todosService: TodosService;

  beforeEach(() => {
    const todos: ITodo[] = [];

    const container = new Container();
    container.bind(TodosService).toSelf().inSingletonScope();
    todosService = container.resolve(TodosService);
  });

  describe('getAll', () => {
    it('should call restClient with properly configured URL', () => {
      todosService.getAll();
      // expect(restClient.get).toHaveBeenCalledWith(`${A_SERVER_URL}/todos`);
    });
  });
});
